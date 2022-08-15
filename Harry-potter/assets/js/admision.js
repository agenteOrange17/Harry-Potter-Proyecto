function voice(){
    document.getElementById("btn").style.display="none";
    document.getElementById("mail").style.display="none";
    document.getElementById("hidden").style.display="block";



}


let username = prompt("Ingresa tu nombre")
const text=document.getElementById("text");
const msg = "Querid@ &nbsp; "  +username+",</br>Nos complace informarle que ha sido aceptado en el Colegio Hogwarts de Magia y Hechicería. Adjuntamos una lista de todos los libros y el equipo necesarios. Esperamos su lechuza antes del 31 de agosto.</br>  Atentamente, Minerva MCgonagall"
let write = 1;
function writing(){
    text.innerHTML = msg.slice(0, write);
    write++;
    if (write > msg.length) {
        write = 800;
    }
}

setInterval(writing,100);