let left=document.getElementById("left");
let right=document.getElementById("right");
let currtranslate=0;

left.addEventListener("click",left_swipe);
right.addEventListener("click",right_swipe);

function left_swipe(){
    
    if(currtranslate-100>=0)
    {currtranslate-=100;
    document.getElementById("carousel-list").style.transform="translateX(-"+currtranslate+"%)";
}
}
function right_swipe(){
    currtranslate+=100;
    if(currtranslate>200)
    currtranslate=0;
    document.getElementById("carousel-list").style.transform="translateX(-"+currtranslate+"%)";
}