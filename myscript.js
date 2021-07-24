'use strict';


//calling the function on scroll of window
window.onscroll = function() {scrollFunction()};

//define my button

let myButton = document.querySelector('#back-to-top');

//details of scrollFunction
function scrollFunction () {
//if the distance from top of doc is over 15px, show the button. if not, dont.
    if(document.body.scrollTop > 15 || document.documentElement.scrollTop > 15){
        myButton.style.display = "block";
    }
    else{
        myButton.style.display = "none";
    }
}

//what happens when we click the button
myButton.onclick = function(){
    scrollToTop();
}

function scrollToTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
