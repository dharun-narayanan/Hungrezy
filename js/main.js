// Header Scroll
let nav = document.querySelector(".navbar");
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("header-scrolled");
        mybutton.style.display = "block";
    }else{
        nav.classList.remove("header-scrolled");
        mybutton.style.display = "none";
    }
} 

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})

    /*login and signup*/

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('contain');
    
    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });
    
    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });
    


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}        

