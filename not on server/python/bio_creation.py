#import json
import os

def make_href_list():
    path = "../../bios/"
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
        bio_file = open("/media/mstarr/Alice/writing/poetry/[ALTERNATE ROUTE]/Issue 8 - Octobor 31 2022/bios/" + name + ".txt", "r")
        bio = bio_file.read()
        bio = bio.replace("\n", "<br />")
        authorBioHTML = bioTemplate_string.replace("{{creator_name}}", name).replace("{{creator bio}}", bio).replace("â€™", "'")
        #print(authorBioHTML)
        bio_html = open("../../bios/" + name.replace(" ", "_") + ".html", "w", encoding="utf-8")
        bio_html.write(authorBioHTML)
        bio_html.close()


make_bio_HTML_files()

def make_list_for_copyright_page():
    path = "/media/mstarr/Alice/writing/poetry/[ALTERNATE ROUTE]/Issue 8 - Octobor 31 2022/bios/"
    bio_HTML_files = os.listdir(path)
    sorted_bio_HTML_files = sorted(bio_HTML_files, key=lambda x: x.split(" ")[-1])
    sorted_bio_HTML_files = str(sorted_bio_HTML_files)
    sorted_bio_HTML_files = sorted_bio_HTML_files.replace("'","").replace("[","").replace("]","").replace("_"," ").replace(".txt","")
    print(sorted_bio_HTML_files)

make_list_for_copyright_page()
