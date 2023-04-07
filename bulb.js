var image = document.getElementById('bulb');

function turnON(){
    if(image.src != "bulb-on.png"){
        image.src = "bulb-on.png"
    }
}

function turnOFF(){
    if(image.src != "bulb-on.png"){
        image.src = "bulb-off.png"
    }
}