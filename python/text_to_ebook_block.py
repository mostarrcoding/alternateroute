path = "G:\\My Drive\\Writing\\Poetry\\[ALTERNATE ROUTE]\\Issue 7 - July 31 2022\\work\\neighbors_bodytext.txt"
textf = open( path, "r", encoding="utf-8")
pre = "<p class=\"p-indent\"><span class=\"s-text2\">"
post = "</span></p>"
out = ""
#print(textf.read())
for line in textf.readlines():
    out += pre + line + post + "\n"
#print(out)
pathout = "G:\\My Drive\\Writing\\Poetry\\[ALTERNATE ROUTE]\\Issue 7 - July 31 2022\\work\\neighbors_ebooktext.txt"
outf = open(pathout, "w", encoding="utf-8")
outf.write(out)
