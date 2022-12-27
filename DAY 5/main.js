// function getdate(days) {
//   var date = new Date();
//   return new Date(date.setDate(date.getDate() + days));
// }

////function set cookie

// function setCookie(name, value) {
//   document.cookie = `${name}=${value};`;
// }

// //function get cookie

// function getCookie(cookieName) {
//  var cookirArr =   document.cookie.split(";")
//  for(var cookie of cookirArr){

//     if(cookie.startsWith(cookieName)){
//        return cookie.split("=")[1]

//     }
//  }
// }
// getCookie("age")

// //function get all cookie

// function getAllCookie() {
//     var cookirArr =   document.cookie.split(";")

//   return cookirArr
//    }
//    getAllCookie()

// //function delete cookie
// function deleteCookie(cookieName) {
//     document.cookie=`${cookieName}=; expires=${getdate(-5).toUTCString()};  `
// }

// deleteCookie("name")

  // //task2

  // function getdate(days) {
  //   var date = new Date();
  //   return new Date(date.setDate(date.getDate() + days));
  // }


var userName = document.getElementById("username");
var age = document.getElementById("age");
var colors =document.getElementById("ccolor");
var male =document.getElementById("male")
var female =document.getElementById("female")


function setCookie(name, value) {
  document.cookie = `${name}=${value};`;
}
function show() {
  setCookie("name", userName.value);
  setCookie("age", age.value);
  setCookie("color",colors.value);
  setCookie("count",0);

 if(male.checked){
  console.log(male.value)
  setCookie("gender",male.value)
 }
 else{
  console.log(male.value)
  setCookie("gender",female.value)
  // location.replace('./two.html');
 }
  

}
//oninput



