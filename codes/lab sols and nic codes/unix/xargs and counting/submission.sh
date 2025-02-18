mkdir outputs
cd inputs
find . -type f -name "*.txt" -exec cp {} ../outputs/ \;
cd ..
cd outputs
find . -type f | sort | xargs cat -n > ../cat.txt
find . -type f | xargs cat | grep "." | wc -l > ../lines.txt

