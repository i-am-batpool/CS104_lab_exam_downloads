grep -E "^([a-z]+)([0-9]{2}) [1-4] 2(2|3)b([0-9]{4})@iitb\.ac\.in submission\.sh$" collect.txt > valid.txt
cut valid.txt -d ' ' -f 1,3 | grep -oE "([a-z]+)([0-9]{2}) 2(2|3)b([0-9]{4})" | sort -t ' ' -k2.4 > sorted.txt
