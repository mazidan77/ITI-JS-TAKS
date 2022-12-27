











// var text =prompt("enter text")
// for(i=1; i<7 ;i++){
//     document.write("<h" + i + ">" + text + "</h" + i+ ">");
// }



// var sum=0
// do {
//     var x = parseInt(prompt("enter a number"))

//     sum+=x

// } while ( x!==0 && sum<=100 );

// document.write("<h1> sum="+sum+"</h1>")



// var sum =0
// var text=prompt("enter a text")
// for(i=0; i<text.length ; i++){
//     if (text[i]=="e"){
//        (sum++)
//     }

// }

//  document.write("<h1> count="+sum+"</h1>")


// //2.2
// var text =prompt("enter text")
// var rev =text.split("").reverse().join("")
// var x=confirm("consider case sensitivity")

// if(x==true){
//  if (text===rev){
//         console.log("palindrom")
//         document.write("<h1> palindrom</h1>")

//     }
//     else{
//         console.log("not palindrom")
//         document.write("<h1>not palindrom</h1>")
//     }

// }
//    else{
//     if (text.toLowerCase()===rev.toLowerCase()){
//         console.log("palindrom")
//         document.write("<h1> palindrom</h1>")
//     }
//     else{
//         console.log("not palindrom")
//         document.write("<h1>not palindrom</h1>")
//     }

//    }



//2.3

// var reg = /^[A-Za-z\s]*$/;
// var regs = /(\b011|\b012|\b010)/g;
// var mailre = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6})*$/;

// do {
//   var fullName = prompt("enter name");
// } while (!reg.test(fullName));
// do {
//   var phoneNumber = prompt("enter your phone number");
// } while (isNaN(Number(phoneNumber)) || phoneNumber.length != 8);

// do {
//   var mobileNumber = prompt("enter your Mobile number");
// } while (
//   mobileNumber.length != 11 ||
//   isNaN(Number(mobileNumber)) ||
//   !regs.test(mobileNumber)
// );

// do {
//   var mail = prompt("enter your mail");
// } while (!mailre.test(mail));

// do {
//   var choose = prompt("green , blue , red");
// } while (choose !== "green" && choose !== "blue" && choose !== "red");

// document.write("<h1 id='myH1'>entering user info</h1>");
// document.write("<hr>");

// document.write(
//   '<h2><span style="color:' +
//     choose +
//     '">Your name is </span>' +
//     fullName +
//     "</h2>"
// );

// document.write(
//   '<h2><span style="color:' +
//     choose +
//     '">Your telephone number is </span>' +
//     phoneNumber +
//     "</h2>"
// );

// document.write(
//   '<h2><span style="color:' +
//     choose +
//     '">Your mobile number is </span>' +
//     mobileNumber +
//     "</h2>"
// );

// document.write(
//   '<h2><span style="color:' +
//     choose +
//     '">Your email address is  </span>' +
//     mail +
//     "</h2>"
// );

// monthArr = [
//   "JAN",
//   "FEB",
//   "MAR",
//   "APR",
//   "MAY",
//   "JUN",
//   "JUL",
//   "AUG",
//   "SEP",
//   "OCT",
//   "NOV",
//   "DEC",
// ];
// daysArr = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var dateNow = new Date();
// monthName = monthArr[dateNow.getMonth()];
// dayName = daysArr[dateNow.getDay()];
// year = dateNow.getFullYear();
// dayNumber = dateNow.getDate();

// document.write(
//   '<h2><span style="color:' +
//     choose +
//     '">today is </span>' +
//     dayName +
//     "  " +
//     monthName +
//     "  " +
//     dayNumber +
//     " " +
//     year +
//     "</h2>"
// );



//3.1
// var n1 =Number(prompt("enter n1")) ;
// var n2 =  Number(prompt("enter n2")) ;
// var n3 = Number(prompt("enter n3")) ;

// var arr = [n1, n2, n3];
// sum = 0;
// mult = 1;
// division = 1;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
//   mult *= arr[i];
//   division = arr[i] / division;
// }
// document.write('<h2><span style="color:red">num of 3 values </span>' + arr[0] + "+" + arr[1] + "+" + arr[2] + "=" + sum +"</h2>")
// document.write('<h2><span style="color:red">multiplication of 3 values </span>' +arr[0] + "*" + arr[1] + "*" + arr[2] + "=" + mult+"</h2>")
// document.write('<h2><span style="color:red">division of 3 values </span>' + arr[0] + "/" + arr[1] + "/" + arr[2] + "=" + division+"</h2>")



// //3.2
// var num1= Number(prompt("enter number 1"))
// var num2= Number(prompt("enter number 2"))
// var num3= Number(prompt("enter number 3"))
// var num4= Number(prompt("enter number 4"))
// var num5= Number(prompt("enter number 5"))

// var arr = [num1,num2,num3,num4,num5];
// document.write('<h2><span style="color:red">you have enter value of </span>' + arr.join(" , ")+"</h2>")
// for (var i = 1; i > arr.length; i++)
//     for (var j = 0; j < i; j++)
//         if (arr[i] < arr[j]) {
//           var x = arr[i];
//           arr[i] = arr[j];
//           arr[j] = x;
//         }
//         document.write('<h2><span style="color:red">ur value after being sorted descending </span>' + arr+"</h2>")

//         document.write('<h2><span style="color:red">ur value after being sorted ascending </span>' + arr.reverse()+"</h2>")


////4
// var raduis = Number(prompt("what is the value of your circle raduis"));
// var area = Math.PI * raduis ** 2;
// confirm("total area of the circle is " + area);

// var value = Number(
//   prompt("what is the value you want to calculate its square root")
// );
// var sqr = Math.sqrt(value);
// confirm("square root of " + value + " is " + sqr);

// var value1 = Number(
//   prompt("what is the angle you want to calculate its cos value")
// );
// var cosValue = Math.cos((value1 * Math.PI) / 180).toFixed(4);
// confirm("cos " + value1 + " is " + cosValue);
