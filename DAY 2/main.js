//task1

var img = document.getElementById("img");
var arrayOfImgs = [
  "imgs/1.pg",
  "imgs/2.jpg",
  "imgs/3.jpg",
  "imgs/4.jpg",
  "imgs/5.jpg",
];

var index = 0;
function next() {
  index++;

  if (index >= arrayOfImgs.length) {
    index = 0;
  }
  img.setAttribute("src", arrayOfImgs[index]);
  
}

function prev() {
  index--;

  if (index < 0) {
    index = arrayOfImgs.length - 1;
  }
  img.setAttribute("src", arrayOfImgs[index]);
 
}

//task2

var myname = document.getElementById("myname");
var mymail = document.getElementById("mymail");

var table = document.getElementById("table");


function submit() {

    var row = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");

    cell1.innerHTML = myname.value;
    cell2.innerHTML = mymail.value;
    row.append(cell1, cell2);
    table.append(row);
    myname.value=""
    mymail.value=""
  } 

//task3
var span1 = document.getElementById("span1");
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var result = document.getElementById("result");
var btn = document.getElementById("btn");
var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
function func1() {
  span1.innerHTML = "changed from innerHTML";
}

function func2() {
  span1.innerText = "changed from innerText";
}
function func3() {
  span1.textContent = "changed from textContent";
}

function multiply() {
  var multi = num1.value * num2.value;
  result.innerHTML = num1.value + " * " + num2.value + " = " + multi;

  // var para=document.createElement("p")
  // para.innerHTML=num1.value+" * "+num2.value+" = "+  multi
  // document.body.append(para)
}

function changestyle() {
  //btn.style.backgroundColor="red"
  btn.classList.toggle("change");
}
function test() {
  link1.setAttribute("href", "https://www.linkedin.com/");
  link2.setAttribute("href", "https://www.google.com/");
}
