'use strict';
document.addEventListener('DOMContentLoaded', function() {
    // your code here


//calling the function on scroll of window
window.onscroll = function() {scrollFunction()};

//define top button

let topButton = document.querySelector('#back-to-top');

//details of scrollFunction
function scrollFunction () {
//if the distance from top of doc is over 15px, show the button. if not, dont.
    if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        topButton.style.display = "block";
    }
    else{
        topButton.style.display = "none";
    }
}

//what happens when we click the button
topButton.onclick = function(){
    scrollToTop();
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// define the about button & where to scroll
let aboutButton = document.querySelector('#aboutButton');
let aboutSection = document.querySelector('#aboutSection')

//call the function on click of aboutButton

aboutButton.onclick = scrollToAbout

//deatils of scrollToAbout;

function scrollToAbout(){
    aboutSection.scrollIntoView({ behavior: 'smooth'});
};
}, false);


// define the contact button & where to scroll
let contactButton = document.querySelector('#contactButton');
let contactSection = document.querySelector('#contactSection')

//call the function on click of Contact

contactButton.onclick = scrollToContact

//deatils of scrollToContact;

function scrollToContact(){
    contactSection.scrollIntoView({ behavior: 'smooth'});
};





// define the fun button & where to scroll
let funButton = document.querySelector('#funButton');
let funSection = document.querySelector('#funSection')

//call the function on click of fun

funButton.onclick = scrollToFun

//deatils of scrollToFun;

function scrollToFun(){
    funSection.scrollIntoView({ behavior: 'smooth'});
};