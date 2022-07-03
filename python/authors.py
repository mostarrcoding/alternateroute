import os
# assign directory
directory = 'G:\\My Drive\\Writing\\Poetry\\[ALTERNATE ROUTE]\\Issue 7 - July 31 2022\\submissions\\accepted\\art'

# iterate over files in
# that directory
authors = ""
for filename in os.listdir(directory):
    authors += filename + ", "
authors_split = authors.split(", ")
print(authors_split)
authors_sort = authors_split.sort(key = lambda x: x.split()[-1])
print(authors_sort)
