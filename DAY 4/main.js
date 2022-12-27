document.addEventListener("contextmenu", function prevent(e) {
  e.preventDefault();
});

//task2

var input = document.getElementById("input");

input.addEventListener("keyup", print);
var reg = /^[A-Za-z\d+]*$/;
function print(e) {
  if (reg.test(input.value) && input.value != "") {
    myp.innerHTML = `the ascii code of "${
      input.value[0]
    }" is ${input.value.charCodeAt(0)}`;
  } else {
  
    myp.innerHTML = `you enter "${e.code}`;
  }
  input.value = "";
}


//task3
var p2=document.getElementById("p2")

var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
};

Rectangle.prototype.Area = function () {
  return this.width * this.height;
};
Rectangle.prototype.Preimeter = function () {
  return (this.width + this.height)*2;
};
Rectangle.prototype.toString = function () {
  return `
   Area = ${this.Area()} 
        PERIMETER = ${this.Preimeter()}`;
};

var result = new Rectangle(2, 3);

p2.innerHTML=`${result.toString()}`

