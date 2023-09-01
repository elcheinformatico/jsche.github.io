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

const parrafosA = ["EL JUEGO YA COMENZÓ",
"Es lo que llamamos movimiento de traslación de la Tierra o movimiento de este planeta alrededor del Sol; la estrella central del sistema solar. La Tierra describe a su alrededor una órbita elíptica, cuya duración es de 365 días, 5 horas, 48 minutos y 45 segundos.",
"It is what we call translation movement of the Earth or movement of this planet around the Sun; the central star of the solar system. The Earth describes an elliptical orbit around it, whose duration is 365 days, 5 hours, 48 minutes and 45 seconds.",
"Los antibióticos solamente funcionan contra las infecciones causadas por bacterias, hongos y ciertos parásitos. Estos no funcionan contra ninguna infección causada por virus.",
"Antibiotics only work against infections caused by bacteria, fungi, and certain parasites. These do not work against any infection caused by viruses.",
 "Accediendo a los objetos Element en el DOM, podemos leer y modificar los elementos en el " +
    "documento, pero antes de hacerlo, debemos considerar que el navegador lee el documento de " +
    "forma secuencial y no podemos referenciar un elemento que aún no se ha creado.",
    "Aunque tanto la luz como el sonido se transmiten por ondas, luminosas en un caso y sonoras en otro, la luz se puede propagar en el vacío y el sonido no. Por este motivo, el láser funciona mediante la concentración de ondas de luz que se transmiten por el vacío.",
    "Although both light and sound are transmitted by waves, light in one case and sound in the other, light can propagate in a vacuum and sound cannot. For this reason, the laser works by concentrating light waves that are transmitted through a vacuum.",
    "Los objetos son como envoltorios de código y JavaScript se aprovecha de esta característica " +
    "extensamente. De hecho, casi todo en JavaScript es un objeto. Por ejemplo, los números y las " +
    "cadenas de caracteres que asignamos a las variables se convierten automáticamente en " +
    "objetos por el intérprete JavaScript. Cada vez que asignamos un nuevo valor a una variable, en " +
    "realidad estamos asignando un objeto que contiene ese valor.",
    "La ciencia, con respecto a la salud humana, el único riesgo cierto de la modificación genética de los alimentos es el de posibles efectos alergénicos. Por ejemplo, en el caso de personas alérgicas al pescado que ingieran algún alimento al que se le haya introducido un gen de pescado al modificarlo.",
    "Science, with respect to human health, the only certain risk of genetic modification of food is that of possible allergenic effects. For example, in the case of people allergic to fish who eat a food to which a fish gene has been introduced by modifying it.",
    "Un programa es un edificio de pensamiento. No cuesta nada construirlo, no " +
    "pesa nada, y crece fácilmente bajo el teclear de nuestras manos. " +
    "Pero sin ningún cuidado, el tamaño de un programa y su complejidad crecerán sin control, confundiendo incluso a la persona que lo creó.",
"A program is a building of thought. It costs nothing to build, weighs nothing, and grows easily under the typing of our hands. But without any care, a program's size and complexity will grow out of control, confusing even the person who created it."]

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
var bucleTiempo;

function tiempoJuego(){
    bucleTiempo= setInterval(()=>{
        valorTiempo++;
    },1000);
}

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
                tiempoJuego();
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
                    clearInterval(bucleTiempo);
                    clearInterval(bucleQuitar);
                    clearInterval(bucleOk);
                    valorSpan = 0;


                    elementCanvasD.style.visibility = "visible";
                    elementCanvasD.style["box-shadow"] = "0px 0px 10px 3px white,inset 10px 10px 180px 5px #1e1e1e";

                    canvasAnimacionD.clearRect(0, 0, 300, 180);
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
                }

                clearInterval(bucleTiempo);
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


    bucleDevolverEstadosInmediato = setInterval(() => {
        if (valorSpan != 0) {
            letras[valorSpan - 1].style["text-shadow"] = `none`;
        }

        valorEquivocacion.textContent = numEquivocacion;
        rachaElement.textContent = rachaNumero;
        obtenerPrecision();
        elementTiempo.textContent = "Tiempo: " + valorTiempo + " segundos"


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

        if (valorColorFondo < 11) {

            audioMusic.pause();



        } else {
            if (audioMusic.paused && fv == false) {
                audioMusic.play();

            }

        }

    }, 100);



}

var totalPuntaje = 0;

function calcularPuntaje() {

    if (rachaNumero < 50) {

        for (var i = 1; i < 511; i++) {

            setTimeout(() => {
                elementPuntaje.textContent = valorPuntaje = valorPuntaje + 1;
            }, 100);


        }

    } else {
  
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

                vasp.style["text-shadow"] = `${colores[valorFinalColorSpan]}  0px 0px 10px`;
           
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
            utterThis.voice = voices[3];
            utterThis.pitch = 0;
            utterThis.rate = 0.2;
            utterThis.lang = "en-US";
            synth.speak(utterThis);

            fondo.style.background = `-webkit-radial-gradient(center, circle,${coloresF[numValor]},#1e1e1e ${valorColorFondo}%,${coloresF[numValor]} 300%,#1e1e1e,#1e1e1e)`;

            elementCanvas.style.visibility = "visible";

            canvasAnimacion.clearRect(0, 0, 300, 180);
            canvasAnimacion.shadowColor = colores[numValor];
            canvasAnimacion.shadowOffsetX = 0;
            canvasAnimacion.shadowOffsetY = 0;
            canvasAnimacion.shadowBlur = 5;
            canvasAnimacion.strokeStyle = colores[numValor];
            canvasAnimacion.font = "bold 36px verdana, sans-serif";
            canvasAnimacion.strokeText(frasesChidas[numValor], 10, 100);

            elementCanvas.animate(keyframesCanvas, options);
            setTimeout(() => {
                elementCanvas.style.visibility = "hidden";
            }, 1000)

            valorOk = 0;

            sonidoOk();

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

            valorEliminadosSpan++;

            if (valorSpan > 0) {
                valorSpan--;
                valorLetrasRestantes--;
            } else {
                valorSpan = 0;
                valorLetrasRestantes = 0;
                clearInterval(bucleQuitar);
            }


        }
    }, 200)

}

var parrafoL;

function crearParrafo() {
    if (valorParrafosA < parrafosA.length) {
        parrafoL = parrafosA[valorParrafosA];

    } else {
        valorParrafosA = 0;
        parrafoL = parrafosA[valorParrafosA];

    }
 
    totalLetrasParrafo = parrafosA[valorParrafosA].length;

    for (var i = 0; i < parrafosA[valorParrafosA].length; i++) {
        elementonuevo = document.createElement("span");
        elementonuevo.textContent = parrafoL[i].toUpperCase();
        elementonuevo.style.color = "silver";
        abc.appendChild(elementonuevo);

    }


}

window.addEventListener("load", iniciar);
