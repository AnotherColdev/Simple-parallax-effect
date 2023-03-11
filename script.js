let parallaxHome = document.querySelector('.parallax');
let parallaxIzila = document.querySelector('.parallaxIzila');
let parallaxUdam = document.querySelector('parallaxUdam');

window.onscroll = () => {
    let scrollTopHome = document.documentElement.scrollTop;
    parallaxHome.style.backgroundPositionY = scrollTopHome * 0.7 + 'px';
    
    let scrollIzila = document.documentElement.scrollTop;
    parallaxIzila.style.backgroundPositionY = (scrollIzila - 300) * 0.7 + 'px';

    parallaxUdam.style.backgroundPositionY = scrollTopHome * 0.7 + 'px';
}