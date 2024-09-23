var sasi = document.getElementById("character");
var block = document.getElementById("block");
var counter=0;
function jump(){
    if(sasi.classList == "animate"){return}
    sasi.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },400);
}
var checkDead = setInterval(function() {      
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("odipoyav raa babuu!!. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
//The getComputedStyle() method gets the computed CSS properties and values of an HTML element
//The getPropertyValue() method returns the value of the specified CSS property.
//The setInterval() method calls a function at specified intervals (in milliseconds).