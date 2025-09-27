class Header extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
                  <header>
                 <div class="header">
                <img src="assets/logo.svg" alt="logo" class="logo">
                <h1 class="title header-content">Mariaaaaa</h1>
                <h2 class="subtitle header-content">projetos e serviços</h2>
                <img class="enterprise header-content" src="/assets/search.svg" alt="procurar" width="100px">
            </div>
                </header>
            <nav class="topnav" id="myTopnav">
            <a href="index.html" class="active">Home</a>
            <a href="/#sobre">Sobre</a>
            <a href="/#curriculo">Currículo</a>
            <a href="pages/utils.html">Utilidades</a>
            <a href="pages/projects.html">Projetos</a>
            <a href="/#contato">Contato</a>
            <a href="/#faq">FAQ</a>
            <button id="theme-switch">
                <i class="fa fa-moon"></i>
                <i class="fa fa-sun"></i>            
                </button>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                <i class="fa fa-bars"></i>
            </a>
                </nav>

    `;
  }
}

        function myFunction() {
            var x = document.getElementById("myTopnav");
            if (x.className === "topnav") {
                x.className += " responsive";
            } else {
                x.className = "topnav";
            }


        }
        
customElements.define('header-component', Header);

let darkmode = localStorage.getItem('dark')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('dark')
        localStorage.setItem('dark', 'active')
}

const disableDarkmode = () => {
    document.body.classList.remove('dark')
        localStorage.setItem('dark',   'null')
} 

if (darkmode === "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode =localStorage.getItem('dark')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})

