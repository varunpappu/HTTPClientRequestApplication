# Method 1 - Node.js, Express, MYSQL #

A simple client REST API that performs GET, POST, UPDATE and DELETE.


### Requirements ###

1) Node.js (https://nodejs.org/en/download/)
2) MYSQL Database (https://www.mysql.com/downloads/)

Once the applications are downloaded and installed follow the commands below to get it working 
on your localhost.

### Steps for running the program ###

1) Switch branch git checkout SQLImplementation
2) Import the database (Db.sql) to your local MYSQL workbench.
3) Run the following queries for getting Node.js server started:

    npm install express --save
    npm install body-parser --save
    npm install cors
    npm install mysql --save

    To check if server is connected pass the command
        node server.js
4) GoTo http://localhost:8081/listUsers which will display the customers in a JSON format.
5) Open the chrome extension to connect to the http://localhost:8081/listUsers and the required    HTTP request can be passed and tested accordingly.
   
