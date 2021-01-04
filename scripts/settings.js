const dynamicMarginRight = function(){
    const htmlButton = document.querySelector(".js-settings-button");

    //Bereken de margin tussen 1200 pixels view width en 1920 pixels view width zodat elke 24 pixels de rechter margin 1 pixel breder wordt
    const calculatedMargin =Math.floor((document.documentElement.clientWidth - 1200) /24) + 30 ;

    //Zet de rechter margin in op de berekende waarde
    htmlButton.style.marginRight = calculatedMargin + "px";

}

document.addEventListener("DOMContentLoaded", function(){
    dynamicMarginRight();

    //Check of de webbrowser geresized is en pas de button rechter margin aan
    window.addEventListener('resize', dynamicMarginRight);
})