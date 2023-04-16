
# Python 3 code to rename multiple
# files in a directory or folder
 
# importing os module
import os
import csv
# Function to rename multiple files

r = '''{
        memberImage: '/images/member_1.jpeg',
        memberName: 'Melon Bulgery',
        memberDesignation: 'Product Designer',
        memberSocial: {
            linkedin: "LINKEDIN",
            twitter: "TWITTER",
            insta: "INSTAGRAM",
            facebook: "FACEBOOK",
        }
    }'''


def getItem(fb, insta, linkedin, twitter):
    return r.replace('LINKEDIN', linkedin).replace('TWITTER', twitter).replace('INSTAGRAM', insta).replace('FACEBOOK', fb)

def main():


        

    with open('public/images/profilepics/new.txt', mode ='a')as f1:
        with open('public/images/profilepics/data.csv', mode ='r')as file:
            csvFile = csv.reader(file)

        # displaying the contents of the CSV file
            for lines in csvFile:
                # print(lines)
                f1.write(getItem(lines[3], lines[4], lines[5], lines[6])+',')




 
# Driver Code
if __name__ == '__main__':
     
    # Calling main() function
    main()