
let nav = document.getElementById('nav');
let btn = document.getElementById('btn');

function scrollTop() {
    window.onscroll = function () {
    if (document.body.scrollTop >= 250 || document.documentElement.scrollTop >= 250 ) {
        nav.classList.remove("nav-default");
        nav.classList.add("nav-colored");
        btn.classList.remove("b-menu");
        btn.classList.add("b-menu2");
}else{
    nav.classList.remove("nav-colored");
    nav.classList.add("nav-default");
    btn.classList.remove("b-menu2");
        btn.classList.add("b-menu");
}
};
}

scrollTop();

