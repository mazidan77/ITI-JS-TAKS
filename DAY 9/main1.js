/////DAT 1/////

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(`a:${a} ,b:${b}`);

//2

let arr = (...array) => {
  let min = Math.min(...array);
  let max = Math.max(...array);
  return `min=${min} max=${max}`;
};
console.log(arr(5, 3, 6, 3, 9));

//3
let fruits = ["apple", "strawberry", "banana", "orange", "mango"];

//a
let isString = fruits.every((b) => typeof b == "string");
console.log(isString);
//b
let startwithA = fruits.some((a) => a.startsWith("a"));
console.log(startwithA);
//c
let filter = fruits.filter((a) => a.startsWith("b") || a.startsWith("s"));
console.log(filter);
//d
let newArr = fruits.map((a) => `I like ${a}`);
console.log(newArr);
//e
newArr.forEach((a) => console.log(a));


console.log("=============================================")
// /////DAY2/////
function courseinfo(course) {
    let defaultValues = {
      courseName: "untitled",
      courseDuration: "0",
      courseOwner: "unknown",
    };
    Object.assign(defaultValues, course);
    console.log(`  course Name: ${defaultValues.courseName}
    course duration: ${defaultValues.courseDuration}
    cource owner: ${defaultValues.courseOwner}`);
  }
  
  courseinfo({
    courseName: "ES6",
  });
  
  console.log("============================================");
  
  // //2
  var dive = document.getElementById("dive");
  var div2 = document.getElementById("div2");
var ad = document.querySelector(".active")
 
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
      users.forEach((user)=>{
         var title = document.createElement("button");

        title.setAttribute("id", user.id);
        // title.classList.add("filter")
        title.innerHTML = `${user.name}`;
       
        dive.appendChild(title);
       
        title.addEventListener("click",(e)=> {
            div2.innerHTML=""
        
          
         
      
            
       
// title.classList.add("active")
   document.querySelector(".active").classList.remove("active")
title.classList.add("active")
    async function ex() {
      try {
        var response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?userId=" + e.target.id
        );
        let posts = await response.json();
        var ul = document.createElement("ul");
       
        
        for(let j=0;j<posts.length;j++){
  
          var li =document.createElement("li")
          li.innerHTML=`${posts[j].title}`
          ul.appendChild(li)
          div2.appendChild(ul)
          
  
        }
        
      } catch {
        document.write("an error happend");
      }
    }
    
    ex();
          
        })
        
       
      })
   
    })
  
    .catch((err) => document.write("an error happened"));
  
    

  import anyname, { rect, square, circle } from "./study.js";
let r = new rect(10, 2);
let s = new square(10);
let c = new circle(4);
console.log(r.tostring());
console.log(s.tostring());
console.log(c.tostring());