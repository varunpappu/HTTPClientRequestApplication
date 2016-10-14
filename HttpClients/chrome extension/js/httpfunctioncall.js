/* Function passes the GET request 
   and receives the result from server
   int JSON format */
function getFunctionality() {

    var http = new XMLHttpRequest();
    var url = document.getElementById("userURL").value;
    url = url.replace(/\s/g, '')
    http.open("GET", url, true);
    console.log(url);
    if (url === "") {
        document.getElementById("displayResult").innerHTML = "Add URL to request";
    } else {
        //Send the proper header information along with the request
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        http.onreadystatechange = function() { //Call a function when the state changes.
            if (http.readyState === 4 && http.status === 200) {
                document.body.className = 'ok';
                console.log(this.status);
                document.getElementById("displayResult").innerHTML = this.responseText;
            } else if (http.status === 404) {
                document.body.className = 'error';
                document.getElementById("displayResult").innerHTML = this.status + " " + this.responseText;
            }
        }
        http.send();
    }
}


/* Function passes the POST request 
    with necessary parameters and creates 
    a new field in the database.
*/

function postFunctionality() {
    var http = new XMLHttpRequest();
    var url = document.getElementById("userURL").value;
    var params = addParameters();
    http.open("POST", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            document.body.className = 'ok';
            document.getElementById("displayResult").innerHTML = this.responseText;
        } else if (http.status === 404) {
            document.body.className = 'error';
            document.getElementById("displayResult").innerHTML = this.status + " " + this.responseText;
        }
    }
    http.send(params);
}


/* Function passes the PUT request 
    with necessary parameters update
    and receives a result based on the
    result 
*/

function putFunctionality() {
    var http = new XMLHttpRequest();
    var url = document.getElementById("userURL").value;
    var params = addParameters();
    http.open("PUT", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            document.body.className = 'ok';
            document.getElementById("displayResult").innerHTML = this.responseText;
        } else if (http.status === 404) {
            document.body.className = 'error';
            document.getElementById("displayResult").innerHTML = this.status + " " + this.responseText;
        }
    }
    http.send(params);
}


/* Function passes the DELETE request 
   and a response is received based on
   the result.
*/

function deleteFunctionality() {
    var http = new XMLHttpRequest();
    var url = document.getElementById("userURL").value;
    http.open("DELETE", url, true);

    //Send the proper header information along with the request
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    http.onreadystatechange = function() { //Call a function when the state changes.
        if (http.readyState === 4 && http.status === 200) {
            document.body.className = 'ok';
            document.getElementById("displayResult").innerHTML = this.responseText;
        } else if (http.status === 404) {
            document.body.className = 'error';
            document.getElementById("displayResult").innerHTML = this.status + " " + this.responseText;
        }
    }
    http.send();
}

/* Function to remove white spaces */
function addParameters() {
    var keyvalue = document.getElementById("textarea").value;
    keyvalue = keyvalue.replace(/\s/g, "")
    return keyvalue;
}