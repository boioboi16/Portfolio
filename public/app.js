// import Typed from 'typed.js';
// import anime from 'animejs/lib/anime.es.js';
// const anime = require('animejs');
let scroll = 0;
let nav = document.querySelector(".navbar");
let menuBtn = document.querySelector(".menu-btn");
let icon = document.querySelector(".fas");
let menu = document.querySelector(".menu");
let burger = document.querySelector(".burger");
// let nav = document.querySelector(".navbar");
// console.log(scroll);





document.addEventListener("scroll", ()=> {
  scroll = window.scrollY;
  // console.log(scroll);
  if(scroll > 30){
    nav.classList.add("sticky");
  }
  else{
    nav.classList.remove("sticky");
  }
});
//hamburger 
menuBtn.addEventListener('click',()=>{
  console.log("clicked");
burger.classList.toggle("active");
menu.classList.toggle("active");
// icon.classList.toggle("active");
});
//Typing effect
const typed = new Typed(".type",{
  strings:["web developer","web developer","final year student","self taught programmer"],
  typeSpeed:100,
  backSpeed:60,
  loop:true
})


let tl = anime.timeline({
  easing:'easeOutExpo',
  duration:750
})
tl.add({
  targets: '.grid div',
  width:'100%',
  backgroundColor:'rgb(197,197,255)',
  delay:anime.stagger(100)
})
tl.add({
  targets: '.grid div',
  width:'90%',
  backgroundColor:'rgb(235,235,255)',
 
})