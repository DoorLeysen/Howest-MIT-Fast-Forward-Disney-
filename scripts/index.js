const inklappenNavigatieBijTablet = function(){
    const htmlNavigatieToggle = document.querySelector(".js-nav-toggle");

    //Bij alle schermen kleiner dan 768px wordt het menu automatisch ingeklapt
    if(window.innerWidth < 768){
        htmlNavigatieToggle.checked = true;
    }
    else{
        htmlNavigatieToggle.checked = false;
    }
}

document.addEventListener("DOMContentLoaded", function(){
    //Navigatie controleren bij laden pagina
    inklappenNavigatieBijTablet();

    //Navigatie controleren en inklappen indien nodig bij resizing
    window.addEventListener('resize', inklappenNavigatieBijTablet);
})