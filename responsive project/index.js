// console.log("object");
// document.querySelector(".cross").style.display = "none";

// document.querySelector('.hamburger').addEventListener("click",() =>{
//     document.querySelector('.sidebar').classlist.toggle('sidebargo');
// });




// let clickhamburger = document.getElementsByClassName('.hamburger')

// const clchum = document.querySelector(".ham");

// function changed() {
//     clchum = document.querySelector(".sidebar").toggle("sidebargo")


//     return sh;
// }

// clchum.addEventListener("click", changed());


function myFunction(x) {
    x.classList.toggle("change");
  }
  

  const hamMenu = document.querySelector(".ham-menu");

  const offScreenMenu = document.querySelector(".sidebar");
  
  hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
  });



