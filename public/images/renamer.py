import os
 
# Function to rename multiple files
def main():
   
    folder = "."
    for count, filename in enumerate(os.listdir(folder)):
        src = f"{folder}/{filename}"  
        newfilename = filename.replace("JPG", "jpg").replace(" ", "")
        dst = f"{folder}/{newfilename}"
        os.rename(src, dst)
 
# Driver Code
if __name__ == '__main__':
     
    # Calling main() function
    main()