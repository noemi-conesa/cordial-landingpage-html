"use strict";

const btn = document.querySelector(".submit-btn");
const btn2 = document.querySelector(".submit-btn2");
const message = document.querySelector(".info-meldung");

btn.addEventListener("click", ()=>{
    message.classList.toggle("show");
})
btn2.addEventListener("click", ()=>{
    message.classList.toggle("show");
})