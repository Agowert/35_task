window.addEventListener('load', function() {
    setBodyLoaded();
    initBurgerMenu();
});

function setBodyLoaded() {
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function initBurgerMenu() {
    var burger = document.getElementById('burgerButton');
    var nav = document.getElementById('mainNav');

    if (!burger || !nav) return;

    burger.addEventListener('click', function() {
        burger.classList.toggle('active');
        nav.classList.toggle('open');
    });


    var links = nav.querySelectorAll('a');
    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function() {
            burger.classList.remove('active');
            nav.classList.remove('open');
        });
    }


    document.addEventListener('click', function(event) {
        if (!nav.classList.contains('open')) return;
        if (nav.contains(event.target)) return;
        if (burger.contains(event.target)) return;

        burger.classList.remove('active');
        nav.classList.remove('open');
    });
}