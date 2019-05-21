const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req,res) => {
    var firstName = req.body.fname;
    var lastName = req.body.lname;
    var email = req.body.email;

    console.log(firstName, lastName, email);
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});