function abrirCarta(){

document.getElementById("carta").style.display="block";

document.getElementById("musica").play();

}


/* CUENTA REGRESIVA */

const fechaObjetivo = new Date("2026-03-25 00:40:00").getTime();

const contador = document.getElementById("contador");

const intervalo = setInterval(()=>{

const ahora = new Date().getTime();

const diferencia = fechaObjetivo - ahora;

if(diferencia <= 0){

clearInterval(intervalo);

contador.innerHTML = "💖 PORFIN JUNTITOS NUEVAMENTE, DAME UN BESITO PORFIS, TE JURO QUE LA PASAREMOS MUY BIEN, TE AMO Y DISFRUTA DE TU VIAJE CONMIGO! 💖";
contador.classList.add("contador-final");

return;

}

const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

contador.innerHTML =
`Joder faltan (${dias} días ${horas}h ${minutos}m ${segundos}s) Para verte!`;

},1000);

/* CORAZONES FLOTANDO CONSTANTES */

setInterval(()=>{

let corazon=document.createElement("div");

corazon.className="corazon";
corazon.innerHTML="❤";

corazon.style.left=Math.random()*100+"vw";
corazon.style.fontSize=(Math.random()*20+10)+"px";

document.body.appendChild(corazon);

setTimeout(()=>{
corazon.remove();
},8000);

},400);