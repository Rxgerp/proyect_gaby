function abrirCarta(){

document.getElementById("carta").style.display="block";

document.getElementById("musica").play();

}



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