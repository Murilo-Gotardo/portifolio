function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 150 * i);
    });


}

const titulo = document.querySelector('.escreve');

typeWriter(titulo);

const titulo2 = document.querySelector('.escreve2');

typeWriter(titulo2)

