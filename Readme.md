#Dock + .Net + MongoDb attempt

trying to get docker, .net core, and mongodb to play together.

this does not init with a DB you need to create it first
manage mongo db at http://localhost:8001
create "BooksstoreDb", create collection "Books", add this document to collection
{'Name':'Design Patterns','Price':54.93,'Category':'Computers','Author':'Ralph Johnson'}

see "results" at http://localhost:8000/api/books (I'm using vscode so my launch settings say open with port:8000)

works when you run it locally, but running on Docker im getting an authirization issue (as of Apr 30, 2020)

