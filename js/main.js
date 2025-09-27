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