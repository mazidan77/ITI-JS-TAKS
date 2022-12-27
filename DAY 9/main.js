// // //1
// function courseinfo(course) {
//   let defaultValues = {
//     courseName: "untitled",
//     courseDuration: "0",
//     courseOwner: "unknown",
//   };
//   Object.assign(defaultValues, course);
//   console.log(`  course Name: ${defaultValues.courseName}
//   course duration: ${defaultValues.courseDuration}
//   cource owner: ${defaultValues.courseOwner}`);
// }

// courseinfo({
//   courseName: "ES6",
// });

// console.log("============================================");

// // //2
// var dive = document.getElementById("dive");
// var div2 = document.getElementById("div2");
// let theId = document.createElement("p");

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((users) => {
//     users.forEach((user)=>{
//        var title = document.createElement("button");
//       title.setAttribute("id", user.id);
//       title.innerHTML = `${user.name}`;
//       dive.appendChild(title);

//     })
//     // for (i = 0; i < users.length; i++) {
//     //   let title = document.createElement("button");
//     //   title.setAttribute("id", users[i].id);
//     //   title.innerHTML = `${users[i].name}`;
//     //   dive.appendChild(title);
//     // }
//   })

//   .catch((err) => document.write("an error happened"));

// dive.addEventListener("click" ,function (e) {
//   div2.innerHTML=""

//   async function ex() {
//     try {
//       var response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts?userId=" + e.target.id
//       );
//       let posts = await response.json();
//       var ul = document.createElement("ul");
//       posts.forEach((post)=>{
//            var li =document.createElement("li")
//         li.innerHTML=`${post.title}`
//         ul.appendChild(li)
//         div2.appendChild(ul)
//       })
//       // for(let j=0;j<posts.length;j++){

//       //   var li =document.createElement("li")
//       //   li.innerHTML=`${posts[j].title}`
//       //   ul.appendChild(li)
//       //   div2.appendChild(ul)

//       // }

//     } catch {
//       document.write("an error happend");
//     }
//   }

//   ex();

// },)

//3

class Shape {
    constructor(name) {
      this.name = name;
    }
  

    toString() {
      return `${this.name}: Area = ${this.calculateArea()}, Parameter = ${this.calculateParameter()}`;
    }
  }