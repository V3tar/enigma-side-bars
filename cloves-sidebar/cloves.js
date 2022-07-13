let nav = document.querySelector('.side-bar');
let widen_btn = document.querySelector('.widen-btn button');
let btn_icon = document.querySelector('.widen-btn button i');
let links = document.querySelectorAll('.link');
let items_heading = document.querySelector('h4');

widen_btn.addEventListener('click',() => {
    nav.classList.toggle('decrease-width');
    if (widen_btn.firstElementChild.classList.contains('fa-caret-left')) {
        widen_btn.firstElementChild.classList.replace('fa-caret-left','fa-caret-right');
    }
    else {
        widen_btn.firstElementChild.classList.replace('fa-caret-right','fa-caret-left');
    }
    links.forEach((link) => {
        link.classList.toggle('display-change');
    });
});
//work with dark and light modes
let mode_btn = document.querySelector('.mode');
let body = document.querySelector('body');

mode_btn.addEventListener('click', () => {
    nav.classList.toggle('dark');
    links.forEach((link) => {
        link.classList.toggle('white-letters');
    });
    if (mode_btn.firstElementChild.classList.contains('fa-toggle-on')) {
        mode_btn.firstElementChild.classList.replace('fa-toggle-on','fa-toggle-off');
    }
    else {
        mode_btn.firstElementChild.classList.replace('fa-toggle-off','fa-toggle-on');
    }
});
