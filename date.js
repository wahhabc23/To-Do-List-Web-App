module.exports.getDate = getDate;

function getDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
    //year:"numeric"  //more can be added if we need for more use docs
  };

  // var day=today.toLocaleDateString("en-US");    //Give Result as DD/MM/YYYY eg:-23/08/2021
  return today.toLocaleDateString("en-US", options); //Return Date as per specifeid variable options  eg:-Monday,August 23

};

module.exports.getDay = getDay;

function getDay() {
  let today = new Date();
  let options = {
    weekday: "long"
    //year:"numeric"  //more can be added if we need for more use docs
  };

  // var day=today.toLocaleDateString("en-US");    //Give Result as DD/MM/YYYY eg:-23/08/2021

  return today.toLocaleDateString("en-US", options); //Return Date as per specifeid variable options  eg:-Monday,August 23

};

//MORE REFRACTED SAME CODES

// exports.getDate = function () {      //module.exports=exports
//   let today = new Date();
//   let options = {
//     weekday: "long",
//     day: "numeric",
//     month: "long"
//     //year:"numeric"  //more can be added if we need for more use docs
//   };
//
//   // var day=today.toLocaleDateString("en-US");    //Give Result as DD/MM/YYYY eg:-23/08/2021
//   return today.toLocaleDateString("en-US", options); //Return Date as per specifeid variable options  eg:-Monday,August 23
//
// };
//
// exports.getDay = function () {
//   let today = new Date();
//   let options = {
//     weekday: "long"
//     //year:"numeric"  //more can be added if we need for more use docs
//   };
//
//   // var day=today.toLocaleDateString("en-US");    //Give Result as DD/MM/YYYY eg:-23/08/2021
//
//   return today.toLocaleDateString("en-US", options); //Return Date as per specifeid variable options  eg:-Monday,August 23
//
// };
