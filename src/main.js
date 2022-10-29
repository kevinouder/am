import './scss/index.scss';

//Javascript to toggle the menu
document.getElementById('nav-toggle').onclick = function(){
    document.getElementById("nav-content").classList.toggle("hidden");
}