window.onscroll = function() {
    document.querySelector('nav-bar')?.handleScroll();
};

const template = document.createElement('template');

template.innerHTML = `
<style>
.menu {
    position: fixed;
    width: 100%;
    z-index:1000;
        }
        nav {
        padding: 0.3rem 10rem;
        display: flex;
        height: 100px;
        justify-content: space-between;
        & img {
        height: 10vh;
        flex-shrink: 0;
        cursor: pointer; 
        }
            .header-logo {
        height: 150px;
        position:relative;
        top: -24px;
    }
    & ul {
        display: flex;
        gap: 3em;
        width:70%;
        padding: 1em;
        align-items: center;
        list-style-type: none;
        justify-content: flex-end;
        & a {
            font-family: monospace;
            text-decoration: none;
            color: var(--primaria);
        }
            & :hover {
            color: var(--variacao-primaria);
                font-weight: bold;
                    transition: all 100ms ease-in;
            }
    }
}
.menu-scrolled {
    background-color: var(--fundo);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    transition: 0.5s;

}
    </style>
<div class="menu">
<nav>        
    <img src="./imagens/logoAnimado.gif" alt="logo" class="header-logo" onclick="location.href='/sobre';"/>
    <ul>
        <li><a href="sobre.html">Início</a></li>
        <li><a href="portifolio.html">Portifólio</a></li>
        <li><a href="sobre.html">Sobre mim</a></li>
    </ul>
</nav>
<div>
`;

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.nav = this.shadowRoot.querySelector('nav');
    }

    handleScroll() {
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 50;
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > headerHeight) {
            this.nav.classList.add('menu-scrolled');
        } else {
            this.nav.classList.remove('menu-scrolled');
        }
    }
}

customElements.define('nav-bar', NavBar);
  const totalStars = 20; 
  const body = document.body;

  for (let i = 0; i < totalStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');

    const size = Math.random() * 100 + 10;
    star.style.width = size + 'px';
    star.style.height = size + 'px';

    const posX = Math.random() * window.innerWidth -130 ;
  const posY = Math.random() * window.innerHeight * 2;  
    star.style.left = posX + 'px';
    star.style.top = posY + 'px';

    star.style.opacity = Math.random() * 0.5 + 0.2;

    star.style.animationDelay = Math.random() * 5 + 's';

    body.appendChild(star);
  }
