const botao = document.getElementById("togglePerfil");

const perfil = document.getElementById("perfil");

const icone = document.getElementById("icone");

const textoBotao = document.getElementById("textoBotao");

const certificado = document.querySelectorAll(".certificado");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visivel");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.2,
});
    certificado.forEach((certificado) => {
        observer.observe(certificado);
    });

const svgOlhoAberto = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
viewBox="0 0 24 24" fill="none" stroke="currentColor"
stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
<circle cx="12" cy="12" r="3"/>
</svg>
`;

const svgOlhoFechado = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
viewBox="0 0 24 24" fill="none" stroke="currentColor"
stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M17.94 17.94A10.94 10.94 0 0 1 12 20
C5 20 1 12 1 12
a21.86 21.86 0 0 1 5.06-7.94"/>
<path d="M1 1l22 22"/>
</svg>
`;

let perfilVisivel = true;

botao.addEventListener("click", () => {

    perfilVisivel = !perfilVisivel;
    render();
});

function render () {

    botao.setAttribute("aria-expanded", perfilVisivel);

    if (perfilVisivel) {

        perfil.classList.remove("oculto");
        console.log(perfil.classList);

        icone.innerHTML = svgOlhoAberto;

        textoBotao.textContent = "Ocultar perfil";

    } else {

        perfil.classList.add("oculto")

        icone.innerHTML = svgOlhoFechado;

        textoBotao.textContent = "Mostrar perfil";
    }
}
    render();