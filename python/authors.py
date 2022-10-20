import os

def authors():
    # assign directory
    directory = 'G:\\My Drive\\Writing\\Poetry\\[ALTERNATE ROUTE]\\Issue 7 - July 31 2022\\Bios'

    # iterate over files in
    # that directory
    authors = ""
    for filename in os.listdir(directory):
        if filename.split('.')[-1] == 'txt':
            authors += filename.split(".txt")[0] + ", "
    authors = ', '.join(authors.split(', ')[:-1])
    authors = authors.split(', ') #uncomment this line to return a list
    return authors
