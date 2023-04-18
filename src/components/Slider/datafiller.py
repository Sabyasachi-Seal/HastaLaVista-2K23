import csv

r = """{
      testimonialThumb: '/images/testimonial_1.jpeg',
      testimonialText: 'QUOTE',
        
      avatarName: 'NAME',
      avatarDesignation: 'CEO AT TECH',
      ratings: '4',
    }"""

def replaceText(name, quote):
    return r.replace("NAME", name).replace("QUOTE", quote.replace("'", "`").replace('\n', ''))

with open('src/components/Slider/data.csv', 'r') as file:
    csvFile = csv.reader(file)
    with open("src/components/Slider/new.txt", "w") as f2:
        for line in csvFile:
            f2.write(replaceText(line[1], line[2])+",")

