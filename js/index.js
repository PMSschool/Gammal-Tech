let tabs = document.querySelectorAll(".he-courses li");
let tabsArray = Array.from(tabs);
let divs = document.querySelectorAll(".courses > div");
let divsArray = Array.from(divs);
let elective = document.querySelectorAll(".elective-courses");


tabsArray.forEach((ele) => {
  ele.addEventListener("click" , function (e){
    
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    divsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display = "flex";
    elective.style.display = "flex";
  });
});




let navInHeader= document.querySelector("nav");
let toggle = document.querySelector(".toggle");
let closeNav = document.querySelector(".close");

toggle.onclick = ()=>{
  toggle.style.display="none";
  navInHeader.classList.add("open");
}
closeNav.onclick = ()=>{
  toggle.style.display="flex";
  navInHeader.classList.remove("open");
  
}
