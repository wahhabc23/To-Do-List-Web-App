//////////////Requiring Package files for project////////

const express = require('express');
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");
////           --------------------------            ////

const app = express(); // Building app as express function

app.set("view engine", "ejs"); // Setting view engine to ejs file(Embedded JS template)

//////////----------- WQRKING AREA -----------//////////

app.use(bodyParser.urlencoded({ //Parse data as URL encoded
  extended: true
}));

app.use(express.static("public")); //Request express to use public folder on root

var items = ["Eat Food", "Play Games", "Read Manga"]; //Create array for post


app.get("/", function(req, res) {

  // var today = new Date(); //Assign new Date function

  // var day = ""; //Creates new string day

  // Method 1 Using Switch

  // switch (today.getDay()) {   //Uses switch to assign string day
  //   case 0:
  //     day = "Sunday";
  //     break;
  //   case 1:
  //     day = "Monday";
  //     break;
  //   case 2:
  //     day = "Tuesday";
  //     break;
  //   case 3:
  //     day = "Wednesday";
  //     break;
  //   case 4:
  //     day = "Thursday";
  //     break;
  //   case 5:
  //     day = "Friday";
  //     break;
  //   case 6:
  //     day = "Saturday";
  //     break;
  //   default:
  //     day = "unkonwn";
  //
  // };

  // Method 2 Using JavaScript function
  //
  // var options = {
  //   weekday: "long",
  //   day: "numeric",
  //   month: "long",
  //   //year:"numeric"  //more can be added if we need for more use docs
  // };
  //
  // // var day=today.toLocaleDateString("en-US");    //Give Result as DD/MM/YYYY eg:-23/08/2021
  //
  // var day = today.toLocaleDateString("en-US", options); //Return Date as per specifeid variable options  eg:-Monday,August 23

  ///////////////Date as function Usermade////////////////
  let day = date.getDate();

  ////////////////////////////////////////////////////////

  res.render("index", { // Sending value to EJS variable
    dayType: day,
    items: items
  });
});

///////////      ///////     ////////      /////////////

app.post("/", function(req, res) {
  var item = req.body.text1;
  items.push(item);
  res.redirect("/");

});
//-------Listening to port 3000 at local host-----------

app.listen(3000, function() {
  console.log("Server sunning @3000 localhost");
});
