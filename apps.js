$(document).ready(function(){

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector ('.navbar_menu');
const navLogo = document.querySelector('#navbar_logo')




// Displayed the mobile menu//

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);


// It is going to show whenever the user scrolls (menu)

const highlightMenu = () => {
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const servicesMenu = document.querySelector('@services-page');
    let scrollPos = window.scrollY
    console.log(scrollPos);

    // It will create a highlight class to the menu items for catch
    if(window.innerWidth > 960 && scrollPos < 600){
        homeMenu.classList.add('highlight');
        aboutMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 1400){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        servicesMenu.classList.remove('highlight');
        return
    } else if (window.innerWidth > 960 && scrollPos < 2345){
        aboutMenu.classList.add('highlight');
        homeMenu.classList.remove('highlight');
        return
}

    if((elem && window.innerWidth < 960 && scrollPos < 600) || elem){
        elem.classList.remove('highlight');
    }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);


// Close mobile Menu when you have to click on the item of the CATCH menu

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if(window.innerWidth <= 768 && menuBars) {
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
};

menuLinks.addEventListener('click', hideMobileMenu);
menuLinks.addEventListener('click', hideMobileMenu);


})