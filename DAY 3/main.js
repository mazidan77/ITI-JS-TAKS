// task1
var input = document.getElementById("input");
var btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  var secondWindow = window.open(
    "",
    "_blank",
    "width=200,height=200,left=200,right=200,title=myname"
  );
  var count = 0;
  var inputValue = input.value;
  var interval = setInterval(() => {
    secondWindow.document.body.innerHTML += `${inputValue[count++]}`;

    if (count == inputValue.length+1) {
      clearInterval(interval);
      secondWindow.close();
    }
  }, 1000);
});
