window.onscroll = function() {rolar2()};

function rolar2() {
    var headerHeight = document.getElementsByTagName("header")[0].offsetHeight;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > headerHeight) {
        document.getElementsByTagName('nav')[0].classList.add('menu-scrolled');
    } else {
        document.getElementsByTagName('nav')[0].classList.remove('menu-scrolled');
    }
}
