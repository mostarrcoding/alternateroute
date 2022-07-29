#import json
import os

"""
path = input("Enter filepath: ")
json_file = open("path", "r")
json_data = json_file.read()
#print(json_data)
authors = json.loads(json_data)["authors"] ##AUTHORS~~~(of json file,
                                                        # i.e. of preexisting shtick)
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
"""

def make_href_list():
    path = r"../bios/"
    bio_HTML_files = os.listdir(path)
    print(bio_HTML_files)
    sorted_bio_HTML_files = sorted(bio_HTML_files, key=lambda x: x.split("_")[-1])
    link_string = "<a class=\"bio\" href=\"bios/{{filename}}\">{{author}}</a>"
    bio_links = open("bio_links.txt" , "w", encoding="utf-8")
    for bio_HTML_file in sorted_bio_HTML_files:
        filename = bio_HTML_file
        author = bio_HTML_file.replace("_", " ").replace(".html", "")
        bio_link = link_string.replace("{{filename}}", filename).replace("{{author}}", author)
        bio_links.write(bio_link + "\n")

make_href_list()


#with open("contribs_i6.json", "r") as json_file:
    #json_data = json.load(json_file)
    #print(json_data)

def make_bio_HTML_files():
    bioTemplate_file = open("../bio_template.html", "r")
    bioTemplate_string = bioTemplate_file.read()
    import authors as auth
    authors = auth.authors()
    print(authors)
    for author in authors:
        #print(author["name"])
        #print(author["bio"])
        name = author
        bio_file = open("G:\\My Drive\\Writing\\Poetry\\[ALTERNATE ROUTE]\\Issue 7 - July 31 2022\\Bios\\" + name + ".txt", "r")
        bio = bio_file.read()
        bio = bio.replace("\n", "<br />")
        authorBioHTML = bioTemplate_string.replace("{{creator_name}}", name).replace("{{creator bio}}", bio).replace("â€™", "'")
        #print(authorBioHTML)
        bio_html = open("../bios/" + name.replace(" ", "_") + ".html", "w", encoding="utf-8")
        bio_html.write(authorBioHTML)
        bio_html.close()
