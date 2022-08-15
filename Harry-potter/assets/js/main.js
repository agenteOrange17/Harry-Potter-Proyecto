
function move(event){
    let X = event.clientX || event.touches[0].clientX;
    let Y = event.clientY || event.touches[0].clientY;
    document.documentElement.style.setProperty('--X', X + 'px');
    document.documentElement.style.setProperty('--Y', Y + 'px');    
}

document.addEventListener('mousemove', move);
document.addEventListener('touchpad', move);


let mySong = document.getElementById("mySong")
let icon = document.getElementById("icon");

icon.onclick = function() {
    if (mySong.paused) {
        mySong.play()
        icon.src = "/Harry-potter/assets/img/pausa.png";
    }else{
        mySong.pause()
        icon.src = "/Harry-potter/assets/img/play.png";
    }
}