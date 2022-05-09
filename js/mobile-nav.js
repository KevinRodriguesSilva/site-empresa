class MobileNavBar {
    constructor(mobileMenu, navList, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass= "active";

        this.handleClick = this.handleClick.bind(this);

    }
    
    addClickEvent(){
        this.mobileMenu.addEventListener("click", this.handleClick);
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.mobileMenu.classList.toggle(this.activeClass);
        this.animateLinks();
    }
    animateLinks() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
             ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
            }s`);
    });
  }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavBar = new MobileNavBar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavBar.init();

function iniciar(){
    var navbar = document.querySelector('.navbar');
    var navEspaco = document.querySelector('.nav-espaco');
    var navOffset = navbar.offsetTop;

    function verificarCabecalho() {
        var scrollTop = window.scrollY;
        var navAltura = navbar.offsetHeight;

        if(scrollTop > navOffset) {
            navbar.classList.add('navbar--fixada');
        
            navEspaco.style.height = navAltura + 'px';

        }else{
            navbar.classList.remove('navbar--fixada');

            navEspaco.style.height = 0;
        }
    }

    window.addEventListener('scroll', verificarCabecalho);
    window.addEventListener('resize', verificarCabecalho);
}
window.addEventListener('load', iniciar);