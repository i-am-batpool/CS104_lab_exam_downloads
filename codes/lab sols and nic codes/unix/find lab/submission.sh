tar -xvf files.tar.gz
find ./bigdirectory -type f -name "file_[0-9][0-9][0-9][0-9].txt" > 1.txt
find ./bigdirectory -type f -name "*.log" > 2.txt
find ./bigdirectory -type f -perm 777 > 3.txt
find ./bigdirectory -type f -mtime -1 > 4.txt
find ./bigdirectory -type f -size +100c -mtime +7 > 5.txt

