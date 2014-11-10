import glob
import os

files = glob.glob("*.jpg")
filecount = 0
for f in files:
    filecount = filecount + 1
    name = "singin14" + str(filecount) + ".jpg"
    try:
        os.rename(f, name)
    except:
        print "error: didn't rename"
        print f
