# Python program to
# demonstrate merging
# of two files

import sys
import shutil,os
  
data = data2 = ""
  
firstfile=sys.argv[1]
secondfile=sys.argv[2]

files=[firstfile,secondfile]

#for f in files:
 #   shutil.copy(f,'E:\Swapnil_work\first_deployment_vm\inputfiles')


print(firstfile)
print(secondfile)

# Reading data from file1
with open(firstfile) as fp:
    data = fp.read()
  
# Reading data from file2
with open(secondfile) as fp:
    data2 = fp.read()
  
# Merging 2 files
# To add the data of file2
# from next line
data += "\n"
data += "\n"
data += data2

print("Collected all the data")
  
with open ("merged.txt", 'w') as fp:
    fp.write(data)

print("Merging is complete")