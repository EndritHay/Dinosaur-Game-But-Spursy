const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
//Funksioni i kercimit
function jump() {
    if (dino.classList !="jump"){ //1kercim per sekond
    dino.classList.add("jump");
        setTimeout(function () {  //thirrja e largimit te classes jump pas kercimit te pare.
            dino.classList.remove("jump");
        }, 300)
}
}

let isAlive = setInterval(function () { //checku nese logo nuk ka perplasje
//Marrim poziten Y te logos
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    //Marrim poziten X te kupes
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left")
    );
    

    //gjetja e perplasjes

    if(cactusLeft < 40 && cactusLeft > 0 && dinoTop >= 140) {
        //perplasja
        alert("A je edhe per ka NJA?")
    }

}, 10)

document.addEventListener("keydown" , function (event) { //event on click
jump();
}); 

  