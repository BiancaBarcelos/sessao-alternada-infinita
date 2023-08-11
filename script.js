var alturaContainer = 300;
var i;

function scroll_item(numero) {

    var boxContainer = document.createElement("div");
    var imagem = document.createElement("img");
    var boxTexto = document.createElement("div");
    var titulo = document.createElement("h2");
    var texto = document.createElement("p");

    imagem.setAttribute("src","https://picsum.photos/500/300?random=" + numero);
    titulo.innerText = "Lorem Ipsum";
    texto.innerText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris egestas nibh ex, id gravida tellus vestibulum aliquet. In faucibus lacus ac magna interdum, sit amet feugiat orci dignissim. Mauris dui nibh, semper a pharetra et, faucibus eu neque. Suspendisse rutrum fermentum tincidunt. Cras ornare pulvinar felis eu auctor. Suspendisse efficitur convallis finibus. Praesent scelerisque magna vitae odio consectetur consequat. Vestibulum ut ex vel metus dapibus tincidunt. Aenean feugiat tristique quam.";

    boxContainer.appendChild(imagem);
    boxContainer.appendChild(boxTexto);
    boxTexto.appendChild(titulo);
    boxTexto.appendChild(texto);

    document.getElementById("box_item").appendChild(boxContainer);

    alturaContainer = document.getElementById("box_item").clientHeight;

};

function injetaBloco() {

    for( i = 0; i < 4; i++ ) {

        scroll_item(i)
    }
};

document.addEventListener('DOMContentLoaded', () => {

    injetaBloco()
    
});
window.addEventListener('scroll', (event) => {

    var scroll = this.scrollY;
    
    if(scroll > (alturaContainer/2)) {

        i++
        scroll_item(i)
    }
})