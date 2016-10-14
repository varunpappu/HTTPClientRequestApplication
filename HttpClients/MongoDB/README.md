# Method 1 - Node.js, Express, MongoDB #

A simple client REST API that performs GET, POST, UPDATE and DELETE.


### Requirements ###

1) Node.js (https://nodejs.org/en/download/)
2) Mongo Database (https://www.mongodb.com/download-center)
3) Advanced REST Client (Google chrome extensions)

Once the applications are downloaded and installed follow the commands below to get it working 
on your localhost.

### Steps for running the program ###

1) Switch to folder MongoDB
2) Start the MongoDB database in a terminal (sudo ./mongodb-osx-x86_64-3.2.9/bin/mongod)
3) Open another terminal and run the following queries for getting Node.js server started:

    npm install
    npm install cors

    To check if server is connected pass the command
        node server.js

4) GoTo http://localhost:8000/api/customers which will display the customers in a JSON format if    any present or http://localhost:8000 to display in an UI format.
5) Open the chrome Extension application and try the http://localhost:8000/api/customers and the    required HTTP request can be passed and tested accordingly.
   
