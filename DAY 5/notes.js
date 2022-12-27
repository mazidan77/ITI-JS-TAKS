var p = document.getElementById("pa");
var p1 =document.getElementById("p1")

function getCookie(cookieName) {
  var cookirArr = document.cookie.split("; ");

  for (var cookie of cookirArr) {
    if (cookie.startsWith(cookieName)) {
      return cookie.split("=")[1];
    }
  }
}

console.log(getCookie("gender"))
getCookie("count")


var count = parseInt(getCookie("count"))

function setCookie(name, value) {
  document.cookie = `${name}=${value};`;
}
setCookie("count",count+1)



if(isNaN(getCookie("count"))){
  window.location.assign("index.html")
}


if(getCookie("gender")=="male"){
  console.log("jjjjj")
  p1.innerHTML=` <img src="imgs/1.jpg" alt="">`
}
else if (getCookie("gender")=="female"){
  p1.innerHTML=` <img class="img" src="imgs/2.jpg" alt="">`
}

p.innerHTML = `  welcome ${getCookie("name")} you have visited this site  ${getCookie("count")} times `;
p.style.color = `${getCookie("color")}`;


function getdate(days) {
  var date = new Date();
  return new Date(date.setDate(date.getDate() + days));
}


  //function delete cookie
  function deleteCookie(cookieName) {
    document.cookie=`${cookieName}=; expires=${getdate(-5).toUTCString()};  `
  }

function logout() {
  deleteCookie("name")
  deleteCookie("age")
  deleteCookie("count")
  deleteCookie("color")
  deleteCookie("gender")
  window.location.assign("index.html")

}

if (getCookie("name") === ''|| getCookie("age") === ''||getCookie("gender") === undefined || getCookie("color") === "blank" ) {
  deleteCookie("name");
  alert("please fill the form")
  location.replace('./index.html');
}
