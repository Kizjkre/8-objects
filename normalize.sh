for infile in assets/*/*.wav; do
    [ -e "$infile" ] || continue
    filename="${infile%.*}"
    outfile="${filename}_norm.wav"
    echo "Processing: $infile"

    # Pass 1 & JSON Parsing: Export clean variables directly
    eval $(ffmpeg -i "$infile" -af "loudnorm=I=-16:TP=-1.5:LRA=11:print_format=json" -f null - 2>&1 | \
    python3 -c "
import sys, re, json
match = re.search(r'\{.*\}', sys.stdin.read(), re.DOTALL)
if match:
    d = json.loads(match.group(0))
    print(f\"mi={d['input_i']}; mtp={d['input_tp']}; mlra={d['input_lra']}; mthresh={d['input_thresh']};\")
")

    # Pass 2: Apply precise normalization using the cleanly evaluated variables
    if [ -n "$mi" ]; then
        ffmpeg -y -i "$infile" -af "loudnorm=I=-16:TP=-1.5:LRA=11:measured_I=$mi:measured_TP=$mtp:measured_LRA=$mlra:measured_thresh=$mthresh\:linear=true" -b:a 192k "$outfile"
    else
        echo "Error: Could not parse audio metrics for $infile"
    fi

    # Clear variables for the next file in the loop
    unset mi mtp mlra mthresh
done
