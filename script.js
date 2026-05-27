// Mensagem de boas-vindas

window.addEventListener("load", () => {
    setTimeout(() => {
        alert("🌎 Bem-vindo ao projeto Energia Acessível e Limpa - ODS 7!");
    }, 1000);
});

// Efeito ao rolar a página

const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {

    cards.forEach(card => {

        const posicao = card.getBoundingClientRect().top;
        const tela = window.innerHeight - 100;

        if(posicao < tela){
            card.classList.add('mostrar');
        }

    });

});

// Contador animado de economia

const contador = document.createElement("div");

contador.classList.add("contador");

contador.innerHTML = `
<h2>⚡ Energia Economizada</h2>
<h1 id="numero">0</h1>
<p>kWh simulados</p>
`;

document.body.appendChild(contador);

let numero = 0;

const intervalo = setInterval(() => {

    numero += 5;

    document.getElementById("numero").textContent = numero;

    if(numero >= 1000){
        clearInterval(intervalo);
    }

}, 20);

// Botão voltar ao topo

const botaoTopo = document.createElement("button");

botaoTopo.innerHTML = "⬆";

botaoTopo.classList.add("topo");

document.body.appendChild(botaoTopo);

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        botaoTopo.style.display = "block";
    }else{
        botaoTopo.style.display = "none";
    }

});

botaoTopo.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});

// Efeito nas cartas

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        const x = e.offsetX;
        const y = e.offsetY;

        card.style.background =
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(255,215,0,0.4),
        rgba(255,255,255,0.05))`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.08)";

    });

});

// Simulador simples de energia

const simulador = document.createElement("section");

simulador.classList.add("simulador");

simulador.innerHTML = `
<h2>🔋 Simulador de Consumo</h2>

<input type="number"
id="horas"
placeholder="Horas por dia">

<button id="calcular">
Calcular
</button>

<h3 id="resultado"></h3>
`;

document.body.appendChild(simulador);

document.addEventListener("click",(e)=>{

if(e.target.id==="calcular"){

const horas =
document.getElementById("horas").value;

const consumo = horas * 30 * 0.5;

document.getElementById("resultado").innerHTML =
`Consumo estimado: ${consumo.toFixed(2)} kWh/mês`;

}

});