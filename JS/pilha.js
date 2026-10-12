/* ===== PILHA DE IMAGENS ===== */

/* Cada clique manda a imagem de cima para o fim da pilha */

document.querySelectorAll(".pilha").forEach(pilha => {

    const itens = [...pilha.querySelectorAll(".pilha__item")];

    /* ordem[0] é o índice do item que está por cima */
    const ordem = itens.map((_, i) => i);

    function aplicar() {

        ordem.forEach((indice, posicao) => {
            itens[indice].style.setProperty("--pos", posicao);
        });
    }

    function proxima() {

        ordem.push(ordem.shift());

        aplicar();
    }

    pilha.addEventListener("click", proxima);

    pilha.addEventListener("keydown", evento => {

        if (evento.key === "Enter" || evento.key === " ") {

            evento.preventDefault();

            proxima();
        }
    });

    aplicar();
});