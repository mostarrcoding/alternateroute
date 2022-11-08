import os

def authors():
    # assign directory
    directory = '/media/mstarr/Alice/writing/poetry/[ALTERNATE ROUTE]/Issue 8 - Octobor 31 2022/bios/'

    # iterate over files in
    # that directory
    authors = ""
    for filename in os.listdir(directory):
        if filename.split('.')[-1] == 'txt':
            authors += filename.split(".txt")[0] + ", "
    authors = ', '.join(authors.split(', ')[:-1])
    authors = authors.split(', ') #uncomment this line to return a list
    return authors
