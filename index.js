//require cmd viges access to another Node file’s code
const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
const hostname = '0';

const { Client } = require('pg');   //Connect to DB
const client = new Client({         
    user: 'postgres',
    host: 'localhost',
    database: 'restaurantes',
    password: '123',
    port: 5432,
});
client.connect();
console.log(`Connected to DB`); 

app.use(express.static(__dirname));
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, hostname, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});