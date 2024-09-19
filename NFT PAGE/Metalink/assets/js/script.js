'use strict';

const navbar = document.querySelector("[data-navbar]");
const navtoggler = document.querySelector("[data-nav-toggler]");

navtoggler.addEventListener("click", function () {
    navbar.classList.toggle("active"); // Corrected "acitve" to "active"
    this.classList.toggle("active");
});

/**
 Header
 */

 const header= document.querySelector("[data-header]");

 const activeElementOnScroll =  function () {
    if (window.scrollY > 200) {
        header.classList.add("active");
    } else{
        header.classList.remove("active")
    }
 }

 window.addEventListener("scroll" , activeElementOnScroll);