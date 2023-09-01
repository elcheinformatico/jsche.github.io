var abc, letras, elementonuevo, bucle, bucle2, fondo, valorParrafosA = 0, valorSpan = 0, valorEquivocacion,
    rachaNumero = 0, rachaElement, precisionElement, valorEliminadosSpan = 0, elementEliminadoSpan, elementcontenedorPrecision;
var totalPrecision;
var valorLetrasRestantes = 0;
var totalLetrasParrafo;
var elementCanvas;
var elementCanvasD;
var valorPuntaje = 0;
var elementPuntaje;
var bucleQuitar;
var bucleDevolverEstadosInmediato;
var vasp;
var valorColorFondo = 25;
var numValor;
var numEquivocacion = 0;
var valorOk = 0;
var bucleOk;
var fv;
var logrado = false;
const synth = window.speechSynthesis;
var bucle1D;

const frasesChidas = [
    "SWEEEET", "TASTY", "FANTASTIC", "DELICIUS", "OH YEAH!",
    "GOOD", "INCREDIBLE", "CHINGON", "PERFECT", "CHIDO",
    "PERRON", "GREAT", "SUPREMACY", "EXCELLENT", "CRAZY"]

const colores = [
    "#F578B2", "#56B27E", "#9B9220", "#E36F81", "#9C89B5",
    "#A0D057", "#ECA64F", "#4D89C5", "#0FB5AA", "#E2715A",
    "#A37F5E", "#4B8CC3", "#919BD0", "#26B1E2", "#3EF7FD"];

const coloresF = [
    "rgba(245, 120, 178,0.565)", "rgba(86, 178, 126,0.565)",
    "rgba(155, 146, 32,0.565)", "rgba(227, 111, 129,0.565)",
    "rgba(156, 137, 181,0.565)", "rgba(160, 208, 87,0.565)",
    "rgba(236, 166, 79,0.565)", "rgba(77, 137, 197,0.565)",
    "rgba(15, 181, 170,0.565)", "rgba(226, 113, 90,0.565)",
    "rgba(163, 127, 94,0.565)", "rgba(75, 140, 195,0.565)",
    "rgba(145, 155, 208,0.565)", "rgba(38, 177, 226,0.565)",
    "rgba(62, 247, 253,0.565)"];

const keyframesCanvas = [
    { transform: "scale(.8) translateY(-10px)", offset: 0 },
    { transform: "scale(1.5) translateY(-20px)", offset: 0.50 },
    { transform: "scale(2) translateY(-30px)", offset: 1 },
];
const options = {
    duration: 1000,
    easing: "linear",
};



const parrafosA = ["EL JUEGO YA COMENZÓ", "Accediendo a los objetos Element en el DOM, podemos leer y modificar los elementos en el " +
    "documento, pero antes de hacerlo, debemos considerar que el navegador lee el documento de " +
    "forma secuencial y no podemos referenciar un elemento que aún no se ha creado.",
    "Los objetos son como envoltorios de código y JavaScript se aprovecha de esta característica " +
    "extensamente. De hecho, casi todo en JavaScript es un objeto. Por ejemplo, los números y las " +
    "cadenas de caracteres que asignamos a las variables se convierten automáticamente en " +
    "objetos por el intérprete JavaScript. Cada vez que asignamos un nuevo valor a una variable, en " +
    "realidad estamos asignando un objeto que contiene ese valor.",
    "Un programa es un edificio de pensamiento. No cuesta nada construirlo, no" +
    "pesa nada, y crece fácilmente bajo el teclear de nuestras manos." +
    "Pero sin ningún cuidado, el tamaño de un programa y su complejidad crecerán sin control, confundiendo incluso a la persona que lo creó."]

const animacionKeyframeCirculosIzquierdos = [
    { top: "0%", left: "1%", offset: 0 },
    { top: "-100%", left: "4%", offset: .05 },
    { top: "-200%", left: "8%", offset: .1 },
    { top: "-1200%", left: "40%", offset: 1 }


];

const propiedadAnimacionCirculosNivel1 =
{
    duration: 3000,
    easing: "linear",


}
var audioOk;
var canvasAnimacion;
var canvasAnimacionD;
var elementTiempo;
var valorTiempo = 0;


function iniciar() {
    elementEliminadoSpan = document.querySelector(".valorEliminadosSpan");
    letras = document.getElementsByTagName("span");
    valorEquivocacion = document.querySelector(".valorEquivocacion");
    rachaElement = document.querySelector(".racha");
    elementcontenedorPrecision = document.querySelector(".contenedorPrecision");
    precisionElement = document.querySelector(".precision");
    elementCanvas = document.getElementById("canvas");
    elementCanvasD = document.getElementById("canvasD");
    canvasAnimacion = elementCanvas.getContext("2d");
    canvasAnimacionD = elementCanvasD.getContext("2d");
    elementPuntaje = document.querySelector(".puntaje");
    elementTiempo = document.querySelector(".tiempo");
    var audioMusic = new Audio("ST.mp3");
    audioOk = new Audio("OK.mp3");


    abc = document.querySelector(".caja");
    fondo = document.querySelector(".Fondo");
    crearParrafo();

    var tamanioParrafo = document.querySelector(".tamanioParrafo");
    vasp = document.querySelector(".valorSp");
    fv = true;

    window.addEventListener("keydown", evento => {

        var azarNum = Math.random() * (colores.length);
        numValor = Math.floor(azarNum);
        if (evento.key && evento.key != "Backspace" && evento.key != "CapsLock" &&
            evento.key != "Shift" && evento.key != "Dead") {

            if (fv == true) {
                sonidoOk();
                fv = false;
                audioMusic.volume = .5;
                audioMusic.play();
            }

            if (letras[valorSpan].textContent == evento.key) {
                clearInterval(bucleQuitar);
                var audioR = new Audio("listo.mp3");
                audioR.volume = .2;
                audioR.play();
                letras[valorSpan].style["text-shadow"] = `none`;
                letras[valorSpan].style.color = colores[numValor];
                letras[valorSpan].style["text-shadow"] = `white  0px 0px 15px`;
                elementPuntaje.style["box-shadow"] = "0px 0px 15px 0px rgba(255, 255, 255, 0.486)," +
                    "inset 165px 0px 30px 10px rgba(163, 127, 94, 0.5)";

                // letras[valorSpan].style.transform = "scale(3)";


                if (valorColorFondo < 25) {
                    if (valorColorFondo < 10) {
                        valorColorFondo = 11
                    }
                    valorColorFondo++;

                } else {
                    valorColorFondo = 25;
                }

                if (valorColorFondo < 25 && valorOk < 5 || valorColorFondo == 25 && valorOk < 5) {

                    fondo.style.background = `-webkit-radial-gradient(center, circle,
                        ${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,#1e1e1e,#1e1e1e,#1e1e1e)`;

                }

                valorLetrasRestantes++;

                if (valorSpan != letras.length) {
                    valorSpan++;
                    vasp.style.transform = "scale(2)";

                }



                rachaNumero++;
                rachaElement.style.transform = "scale(2)";

                if (valorSpan == letras.length) {
                    clearInterval(bucleQuitar);
                    clearInterval(bucleOk);
                    valorSpan = 0;


                    elementCanvasD.style.visibility = "visible";
                    elementCanvasD.style["box-shadow"] = "0px 0px 10px 3px white,inset 10px 10px 180px 5px #1e1e1e";

                    canvasAnimacionD.clearRect(0, 0, 300, 180);
                    // for (var i = 0; i < colores.length; i++) {
                    canvasAnimacionD.shadowColor = colores[numValor];
                    canvasAnimacionD.shadowOffsetX = 0;
                    canvasAnimacionD.shadowOffsetY = 0;
                    canvasAnimacionD.shadowBlur = 5;
                    canvasAnimacionD.strokeStyle = colores[numValor];
                    canvasAnimacionD.font = "bold 26px verdana, sans-serif";
                    canvasAnimacionD.strokeText("Enter para continuar", 0, 85);


                } else {

                }

                if (valorSpan != 0) {
                    quitarLetra();

                }

                calcularPuntaje();



            } else if (evento.key == "Enter") {
                elementCanvasD.style.visibility = "hidden";
                elementCanvasD.style["box-shadow"] = "none";

                for (var i = 1; i <= (totalLetrasParrafo - valorEliminadosSpan); i++) {
                    abc.removeChild(abc.lastChild);
                    // tamanio.textContent=i;
                }


                clearInterval(bucleQuitar);
                clearInterval(bucleOk);
                fv = true;
                valorColorFondo = 25;
                valorParrafosA++;
                crearParrafo();
                valorSpan = 0;
                valorLetrasRestantes = 0;
                valorEliminadosSpan = 0
                numEquivocacion = 0;
                valorPuntaje = 0;
                rachaNumero = 0;
                valorTiempo = 0;

                quitarLetra();



            } else {
                numEquivocacion++;
                rachaNumero = 0;
            }

        } else if (evento.key == "Backspace") {
            if (letras.length > 0) {
                letras[letras.length - 1].animate(animacionKeyframeCirculosIzquierdos, propiedadAnimacionCirculosNivel1);
                setTimeout(() => {
                    abc.removeChild(abc.lastChild);
                }, 10)
            }
        }


    });

    // bucle1D=setInterval(()=>{
    //     elementPuntaje.style["box-shadow"] = "0px 0px 15px 0px rgba(255, 255, 255, 0.486)";


    // },1000)

    bucleDevolverEstadosInmediato = setInterval(() => {
        if (valorSpan != 0) {
            letras[valorSpan - 1].style["text-shadow"] = `none`;
        }

        valorEquivocacion.textContent = numEquivocacion;
        rachaElement.textContent = rachaNumero;
        // elementPuntaje.textContent = valorPuntaje;
        obtenerPrecision();

        // if (totalPrecision > 95) {

        //     elementcontenedorPrecision.style["box-shadow"] = " 0px 0px 15px 0px rgba(160, 208, 87, 0.486), inset 0px 0px 30px 10px rgba(160, 208, 87, 0.5)";

        // } else if (totalPrecision > 89 && totalPrecision < 96) {
        //     elementcontenedorPrecision.style["box-shadow"] = " 0px 0px 15px 0px rgba(236, 166, 79, 0.486), inset 0px 0px 30px 10px rgba(236, 166, 79, 0.5)";

        // } else {
        //     elementcontenedorPrecision.style["box-shadow"] = " 0px 0px 15px 0px rgba(226, 113, 90, 0.486), inset 0px 0px 30px 10px rgba(226, 113, 90, 0.5)";

        // }



        if (totalPrecision > 95) {

            elementcontenedorPrecision.style["box-shadow"] = ` 0px 0px 15px 0px rgba(160, 208, 87, 0.486), inset 0px -${totalPrecision}px 30px 1px rgba(160, 208, 87, 0.5)`;

        } else if (totalPrecision > 89 && totalPrecision < 96) {
            elementcontenedorPrecision.style["box-shadow"] = ` 0px 0px 15px 0px rgba(236, 166, 79, 0.486), inset 0px -${totalPrecision}px 30px 1px rgba(236, 166, 79, 0.5)`;

        } else if (totalPrecision < 90) {
            elementcontenedorPrecision.style["box-shadow"] = ` 0px 0px 15px 0px rgba(226, 113, 90, 0.486), inset 0px -${totalPrecision}px 30px 1px rgba(226, 113, 90, 0.5)`;

        }






    }, 50);

    bucle = setInterval(() => {
        tamanioParrafo.textContent = totalLetrasParrafo;
        elementEliminadoSpan.textContent = valorEliminadosSpan;

        if (valorSpan != 0) {
            vasp.textContent = valorSpan;

        } else {
            vasp.textContent = valorLetrasRestantes;
        }
        vasp.style.transform = "scale(1)";
        rachaElement.style.transform = "scale(1)";

        // setTimeout(()=>{

        // },50) 


        if (valorColorFondo < 11) {//MANEJAR CUANDO TERMINA  LA CANCION

            audioMusic.pause();



        } else {
            if (audioMusic.paused && fv == false) {
                audioMusic.play();

            }

        }

    }, 100);

    elementTiempo.textContent = "Tiempo: " + valorTiempo + " segundos"


}

var totalPuntaje = 0;

function calcularPuntaje() {

    if (rachaNumero < 50) {
        // totalPuntaje = totalPuntaje + 550;

        // valorPuntaje = totalPuntaje;
        for (var i = 1; i < 511; i++) {

            setTimeout(() => {
                elementPuntaje.textContent = valorPuntaje = valorPuntaje + 1;
            }, 100);


        }


    } else {
        // totalPuntaje = totalPuntaje + 1100;

        // valorPuntaje = totalPuntaje;
        for (var i = 0; i < letras.length; i++) {
            letras[i].style["text-shadow"] = `cyan 0px 0px 10px`;
        }
        for (var i = 1; i < 1101; i++) {
            setTimeout(() => {
                elementPuntaje.textContent = valorPuntaje = valorPuntaje + 1;
            }, 100);

        }
    }

}


function obtenerPrecision() {

    if (valorLetrasRestantes == 0) {
        precisionElement.textContent = 100 + "%";
    } else {
        totalPrecision = 100 - (Math.round((numEquivocacion / valorLetrasRestantes) * 100));
        precisionElement.textContent = totalPrecision + "%";
    }

}

function sonidoOk() {
    bucleOk = setInterval(() => {
        if (valorColorFondo == 25 && valorOk < 5) {

            valorOk++;
            let valorAzarColorSpan = Math.random() * (colores.length);
            let valorFinalColorSpan = Math.floor(valorAzarColorSpan);
            if (valorOk > 3) {

                // vasp.style.color = `${colores[valorFinalColorSpan]}`;
                vasp.style["text-shadow"] = `${colores[valorFinalColorSpan]}  0px 0px 10px`;
                // for (var i = 0; i < letras.length; i++) {
                //     letras[i].style["text-shadow"] = "cyan 0px 0px 10px";

                // }
                // vasp.style["box-shadow"] = `0px 0px 90px 10px ${colores[valorFinalColorSpan]}`;

            }

        }

        if (valorColorFondo < 25 && valorOk < 5) {
            valorOk = 0;
            vasp.style["text-shadow"] = "cyan  0px 0px 0px";
            for (var i = 0; i < letras.length; i++) {
                letras[i].style["text-shadow"] = "none";

            }

        }

        if (valorColorFondo == 25 && valorOk > 4) {


            clearInterval(bucleOk);
            vasp.style["text-shadow"] = "cyan  0px 0px 0px";
            for (var i = 0; i < letras.length; i++) {
                letras[i].style["text-shadow"] = "none";

            }

            audioOk.volume = .5;
            audioOk.play();

            const utterThis = new SpeechSynthesisUtterance(frasesChidas[numValor]);

            const voices = window.speechSynthesis.getVoices();
            // console.log(voices);
            utterThis.voice = voices[3];
            utterThis.pitch = 0;
            utterThis.rate = 0.2;
            utterThis.lang = "en-US";
            synth.speak(utterThis);

            fondo.style.background = `-webkit-radial-gradient(center, circle,${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,${coloresF[numValor]} 300%,#1e1e1e,#1e1e1e)`;

            elementCanvas.style.visibility = "visible";

            canvasAnimacion.clearRect(0, 0, 300, 180);
            // for (var i = 0; i < colores.length; i++) {
            canvasAnimacion.shadowColor = colores[numValor];
            canvasAnimacion.shadowOffsetX = 0;
            canvasAnimacion.shadowOffsetY = 0;
            canvasAnimacion.shadowBlur = 5;
            canvasAnimacion.strokeStyle = colores[numValor];
            canvasAnimacion.font = "bold 36px verdana, sans-serif";
            canvasAnimacion.strokeText(frasesChidas[numValor], 10, 100);

            // }
            elementCanvas.animate(keyframesCanvas, options);
            setTimeout(() => {
                elementCanvas.style.visibility = "hidden";
            }, 1000)

            valorOk = 0;

            sonidoOk();
            // fondo.style.background = `-webkit-radial-gradient(center, circle,${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,#1e1e1e,#1e1e1e,#1e1e1e)`;

        }


    }, 1000);
}


function quitarLetra() {

    bucleQuitar = setInterval(() => {

        if (valorColorFondo > 10) {

            fondo.style.background = `-webkit-radial-gradient(center, circle,${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,#1e1e1e,#1e1e1e,#1e1e1e)`;
            valorColorFondo--;



        } else if (valorColorFondo < 11 && letras.length > 0) {

            letras[0].animate(animacionKeyframeCirculosIzquierdos, propiedadAnimacionCirculosNivel1);
            setTimeout(() => {
                abc.removeChild(letras[0]);

            }, 50)




            if (valorColorFondo > 0) {
                fondo.style.background = `-webkit-radial-gradient(center, circle,${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,#1e1e1e,#1e1e1e,#1e1e1e)`;
                valorColorFondo--;
            }

            valorEliminadosSpan++;//AUX bucleQuitar

            if (valorSpan > 0) {
                valorSpan--;//DISMINUIMOS PARA CREAR NUEVOS PARRAFOS AL COLOREAR TODAS LAS LETRAS
                valorLetrasRestantes--;
            } else {
                valorSpan = 0;
                valorLetrasRestantes = 0;
                clearInterval(bucleQuitar);
            }


        }
    }, 200)

}

var parrafoL
function crearParrafo() {
    if (valorParrafosA < parrafosA.length - 1) {
        parrafoL = parrafosA[valorParrafosA];

    } else {
        valorParrafosA = 0;
        parrafoL = parrafosA[valorParrafosA];

    }
    // totalLetrasParrafo = parrafosA[valorParrafosA].length;
    // var numAzar = Math.random() * (colores.length);
    // var valorNum = Math.floor(numAzar);

    // parrafoL = parrafosA[valorParrafosA];
    totalLetrasParrafo = parrafosA[valorParrafosA].length;

    for (var i = 0; i < parrafosA[valorParrafosA].length; i++) {
        elementonuevo = document.createElement("span");
        elementonuevo.textContent = parrafoL[i].toUpperCase();
        elementonuevo.style.color = "silver";
        abc.appendChild(elementonuevo);

    }


}

// function removerLetras() {
//     bucle2 = setInterval(() => {
//         var audioR = new Audio("listo.mp3");
//         audioR.play();
//         abc.removeChild(abc.firstChild);

//     }, 500)
// }
// function coloresLetras() {
//     var numAzar = Math.random() * (colores.length);
//     var valorNum = Math.floor(numAzar);

//     for (var i = 0; i < letras.length; i++) {
//         letras[i].style.color = colores[valorNum];
//     }

// }

// {/* <p>Esta página se pone violenta cuando se mantiene presionado la
// tecla V.</p>
// <script>
// window.addEventListener("keydown", evento => {
// if (evento.key == "v") {
// document.body.style.background = "violet";
// }
// });
// window.addEventListener("keyup", evento => {
// if (evento.key == "v") {
// document.body.style.background = "";
// }
// });
// </script> */}

window.addEventListener("load", iniciar);
