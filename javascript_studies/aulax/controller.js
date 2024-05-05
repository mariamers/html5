//arrow function: const nomeFuncao = {} => {parametros}
//(a,b) => a*b

const bola = document.getElementById("circle")
const textinho = document.getElementById("texto")


bola.addEventListener (
    "mouseenter",
    (event) => {
        console.log(22);
        bola.classList.add("bola-alterada")      
        bola.classList.remove("bola-alterada2")
        textinho.classList.add("texto-visivel")
        textinho.classList.remove("texto-invisivel")

  

    }
)
bola.addEventListener (
    "mouseout",
    (event) => {
        console.log(22);
        bola.classList.add("bola-alterada2")
        bola.classList.remove("bola-alterada")
        textinho.classList.remove("texto-visivel")
        textinho.classList.add("texto-invisivel")
     
    }
)

