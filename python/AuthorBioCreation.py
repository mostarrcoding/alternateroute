import json
import os

json_file = open("../contribs_i6.json", "r")
json_data = json_file.read()
#print(json_data)
authors = json.loads(json_data)["authors"]
#print(authors)
bioTemplate_file = open("../bio_template.html", "r")
bioTemplate_string = bioTemplate_file.read()

for author in authors:
    #print(author["name"])
    #print(author["bio"])
    name = author["name"]
    bio = author["bio"]
    authorBioHTML = bioTemplate_string.replace("{{creator_name}}", name).replace("{{creator bio}}", bio)
    #print(authorBioHTML)
    bio_html = open("../bios/" + name.replace(" ", "_") + ".html", "w")
    bio_html.write(authorBioHTML)
    bio_html.close()

path = r"../bios/"
bio_HTML_files = os.listdir(path)
sorted_bio_HTML_files = sorted(bio_HTML_files, key=lambda x: x.split("_")[-1])
#print(bio_HTML_files)
link_string = "<a class=\"bio\" href=\"bios/{{filename}}\">{{author}}</a>"
bio_links = open("bio_links.txt" , "w")
for bio_HTML_file in sorted_bio_HTML_files:
    filename = bio_HTML_file
    author = bio_HTML_file.replace("_", " ").replace(".html", "")
    bio_link = link_string.replace("{{filename}}", filename).replace("{{author}}", author)
    bio_links.write(bio_link + "\n")


#with open("contribs_i6.json", "r") as json_file:
    #json_data = json.load(json_file)
    #print(json_data)
