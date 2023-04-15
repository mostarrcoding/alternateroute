'''
Standard file naming convention for bio files is "[first name] [last name] . txt".
'''

import os

def get_addr():
    '''Returns the absolute path as input by the user upon query for directory containing author biography files.'''
    #addr is the location of a folder/directory of bio.txt files no subdirectories allowed; not interested in content atm
    addr = input("Which directory contains author biography files?")
    return addr

def authors(directory):
    '''Returns list or string of authors. Input should be output from get_addr().'''
    #declare authors variable to intiialize list
    authors = ""

     # iterate over files in directory
    for filename in os.listdir(directory):
        #print(filename) # for debugging
        if filename.split('.')[-1] == 'txt':
            authors += filename.split(".txt")[0].replace("bio", "").rstrip() + ", "

    #join author names with comma as delimiter
    authors = ', '.join(authors.split(', ')[:-1])
    authors = authors.split(', ') #comment this line to return a string; uncomment it to return a list
    return authors

def make_bio_HTML_files(addr, authors):
    '''Creates HTML files, one for each author biography, containing their biography in a <p> under their name in <h2>.'''
    bioTemplate_file = open("../bio_template.html", "r")
    bioTemplate_string = bioTemplate_file.read()
    #print(authors)
    for author in authors:
        #print(author["name"])
        #print(author["bio"])
        name = author
        bio_file = open(addr + name + ".txt", "r")
        bio = bio_file.read()
        bio = bio.replace("\n", "<br />")
        authorBioHTML = bioTemplate_string.replace("{{creator_name}}", name).replace("{{creator bio}}", bio).replace("â€™", "'")
        #print(authorBioHTML)
        bio_html = open("../../bios/" + name.replace(" ", "_") + ".html", "w", encoding="utf-8")
        bio_html.write(authorBioHTML)
        bio_html.close()

def make_href_list():
    '''Creates list of <a> links for input into bio_list.html. Does the whole list, not just new authors. No fancy new file detection.'''
    path = "../../bios/"
    bio_HTML_files = os.listdir(path)
    #print(bio_HTML_files)
    sorted_bio_HTML_files = sorted(bio_HTML_files, key=lambda x: x.split("_")[-1])
    link_string = "<a class=\"bio\" href=\"bios/{{filename}}\">{{author}}</a>"
    bio_links = open("bio_links.txt" , "w", encoding="utf-8")
    for bio_HTML_file in sorted_bio_HTML_files:
        filename = bio_HTML_file
        author = bio_HTML_file.replace("_", " ").replace(".html", "")
        bio_link = link_string.replace("{{filename}}", filename).replace("{{author}}", author)
        bio_links.write(bio_link + "\n")

def make_list_for_copyright_page(path):
    '''Prints, so you can copy-paste, a last-name-alphabetized comma+space-delimited list (of type string) for the recogntions in the
    beginning of the zine issue. Path is directory where biography HTML files are stored, which usually should be <~/alternateroute/bios/>.'''
    bio_HTML_files = os.listdir(path)
    sorted_bio_HTML_files = sorted(bio_HTML_files, key=lambda x: x.split(" ")[-1])
    sorted_bio_HTML_files = str(sorted_bio_HTML_files)
    sorted_bio_HTML_files = sorted_bio_HTML_files.replace("'","").replace("[","").replace("]","").replace("_"," ").replace(".txt","")
    print(sorted_bio_HTML_files)
