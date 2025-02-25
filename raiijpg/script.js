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
        justify-content: space-between;
        & img {
        height: 10vh;
        flex-shrink: 0;
        cursor: pointer; 
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
            text-decoration: none;
            color: var(--texto);
        }
            & :hover {
                font-weight: bold;
                    transition: all 100ms ease-in;
            }
    }
}
.menu-scrolled {
    background-color: var(--primaria);
    box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
    transition: 0.5s;
    & a {
        color: var(--variacao-texto);
    }
}
    </style>
<div class="menu">
<nav>        
    <img src="./imagens/logo_light.png" alt="logo" class="header-logo" onclick="location.href='/raiijpg';"/>
    <ul>
        <li><a href="/raiijpg">Início</a></li>
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
