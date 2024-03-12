"use strict";

let respuesta = parseInt(prompt("Cuantos Años Tienes?","0"));

if(respuesta >= 0 && respuesta <= 3) {
    window.location.href = "https://www.dodot.es/";
} else if (respuesta >= 4 && respuesta <= 6){
    window.location.href = "https://www.pocoyo.com/";
} else if (respuesta >= 7 && respuesta <= 12){
    window.location.href = "https://www.harrypotter.bloomsbury.com/";
} else if (respuesta >= 13 && respuesta <= 17){
    window.location.href = "https://www.lego.com/";
} else {
    alert("Bienvenid@ a la Página de Ilerna Valley!!");
}

