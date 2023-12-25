const contenedorBtn = document.querySelector(".contenedorB");
const cajaTexto = document.querySelector("#texto");
const imgOveja = document.querySelector(".cBorrego");

const elementFinicio=document.querySelector(".finicio");
const elementFp=document.querySelector(".fp");

const elementMensaje=document.querySelector(".mensaje");

var contador = 0;
var siguiente;

function iniciar() {
    contenedorBtn.addEventListener(
        "click",
        (accion) => {
            if (siguiente) {
                // event.target.style.background="yellow"
                if (accion.target.classList.contains("numero")) {
                    var sonidoBtn= new Audio("btnnum.mp3");
                    sonidoBtn.play();
                    cajaTexto.value += accion.target.innerText;
                }
                if (accion.target.classList.contains("back")) {
                    var sonidoBtn= new Audio("enter.mp3");
                    sonidoBtn.play();
                    var contenidoTexto = cajaTexto.value;
                    cajaTexto.value = contenidoTexto.substring(0, contenidoTexto.length - 1);
                }
                if (accion.target.classList.contains("enter")) {
                    var sonidoBtn= new Audio("enter.mp3");
                    sonidoBtn.play();
                    comparar(cajaTexto.value)
                }
            }
        }
    )

    elementMensaje.addEventListener("click",()=>{
        // var tema= new Audio("tema.mp4");
        // tema.volume=.2;
        // tema.play();
        elementFinicio.style.display="none";
        elementFp.style.display="none";
            animar1();

    })

    // animar1();
    contador++;

}

const keyframeOvejaS1 = [
    { top: "15%", left: "100%", background: ' url("b00.png") no-repeat', backgroundSize: "contain", offset: 0 },
    { top: "17%", left: "80%", offset: 0.15 },
    { top: "19%", left: "65%", offset: 0.3 },
    { top: "21%", left: "55%", offset: 0.45 },
    { top: "23%", left: "45%", offset: 0.60 },
    { top: "25%", left: "35%", offset: 0.75 },
    { top: "27%", left: "25%", background: '  url("b11.png") no-repeat', backgroundSize: "contain", offset: 0.90 },
    { top: "31%", left: "15%", background: '  url("b22.png") no-repeat', backgroundSize: "contain", offset: 1 },
];
const optionsOvejaS = {
    duration: 600,
    easing: "linear",
};

const keyframeOvejaN = [
    { top: "31%", left: "15%", background: ' url("b22.png") no-repeat', backgroundSize: "contain", offset: 0 },
    { top: "31%", left: "15%", background: '  url("b22-1.png") no-repeat', backgroundSize: "contain", offset: 0.50 },
    { top: "31%", left: "15%", background: '  url("b22.png") no-repeat', backgroundSize: "contain", offset: 1 },
];

const optionsOvejaN = {
    duration: 200,
    easing: "linear",
};


const keyframeOvejaS2 = [
    { top: "31%", left: "15%", background: ' url("b33.png") no-repeat', backgroundSize: "contain", transform: "rotateZ(10deg)", offset: 0 },
    { top: "25%", left: "-15%", background: '  url("b00.png") no-repeat', backgroundSize: "contain", offset: 0.25 },
    { top: "23%", left: "-35%", background: '  url("b00.png") no-repeat', backgroundSize: "contain", offset: 0.50 },
    { top: "21%", left: "-60%", background: '  url("b00.png") no-repeat', backgroundSize: "contain", offset: 0.75 },
    // { top: "23%", left: "-61%",  offset: 0.60 },
    // { top: "19%", left: "-61%", offset: 0.75 },
    // { top: "17%", left: "-61%", offset: 0.90 },
    { top: "15%", left: "-61%", background: '  url("b00.png") no-repeat', backgroundSize: "contain", offset: 1 },
];
const optionsOvejaS2 = {
    duration: 1500,
    easing: "linear",
};

var tmpSetTimeout;

function animar1() {

    imgOveja.animate(keyframeOvejaS1, optionsOvejaS);  
    var sonidoOveja= new Audio("oveja.mp3");
    sonidoOveja.play();

    Promise.all(imgOveja.getAnimations().
        map((keyframeOvejaS1) =>
            keyframeOvejaS1.finished)).then(
                () => {
                    siguiente=true;
                    imgOveja.style.top = "31%";
                    imgOveja.style.left = "15%";
                    imgOveja.style.background = "url('b22.png')";
                    imgOveja.style.backgroundSize = "contain";
                    imgOveja.style.repeat = "no-repeat";
                    tmpSetTimeout= setTimeout(animar2, 800);
                },
            );

}

function animar2() {

    imgOveja.animate(keyframeOvejaN, optionsOvejaN);

    Promise.all(imgOveja.getAnimations().
        map((keyframeOvejaN) =>
            keyframeOvejaN.finished)).then(
                () => {
                    imgOveja.style.top = "31%";
                    imgOveja.style.left = "15%";
                    imgOveja.style.background = "url('b22.png')";
                    imgOveja.style.backgroundSize = "contain";
                    imgOveja.style.repeat = "no-repeat";


                },
            );
}

function animar3() {

    imgOveja.animate(keyframeOvejaS2, optionsOvejaS2);
    var sonidoOveja= new Audio("oveja.mp3");
    sonidoOveja.play();

    Promise.all(imgOveja.getAnimations().
        map((keyframeOvejaS2) =>
            keyframeOvejaS2.finished)).then(
                () => {
                    imgOveja.style.top = "15%";
                    imgOveja.style.left = "-61%";
                    imgOveja.style.background = "url('b00.png')";
                    imgOveja.style.backgroundSize = "contain";
                    setTimeout(animar1, 0);

                },
            );
}


function comparar(numeroCaja) {
    if (numeroCaja == contador) {
        clearTimeout(tmpSetTimeout);
        siguiente=false;
        contador++;
        cajaTexto.value = "";
        // imgOveja.style.visibility = "hidden";
        animar3();

    }
}

function escribirNumer() {

}

window.addEventListener("load", iniciar, false);