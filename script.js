var cssText = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("generator");

// set initial values at page load
console.log(color1.value);

setGradient();

function setGradient(){
    body.style.background = 
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";
    cssText.textContent = body.style.background + ";";
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);


function generateRandomNumbers(){
    var colourSet = [];
    for(var i = 0; i < 6; i++){
       var num = Math.floor(Math.random()*256);
        colourSet.push(num);
    }
    return colourSet;
}


button.addEventListener("click",function(){
    var colours = generateRandomNumbers();
    
    var randomColor1 = parseInt(colours[0]);
    var randomColor2 = parseInt(colours[1]);
    var randomColor3 = parseInt(colours[2]);
    var randomColor4 = parseInt(colours[3]);
    var randomColor5 = parseInt(colours[4]);
    var randomColor6 = parseInt(colours[5]);
    
    var colorOne = "rgb(" + randomColor1 + "," + randomColor2 + "," + randomColor3 + ")";
    var colorTwo = "rgb(" + randomColor4 + "," + randomColor5 + "," + randomColor6 + ")";
        
    body.style.background = 
        "linear-gradient(to right, "
        + colorOne
        + ", "
        + colorTwo
        + ")";
    
    cssText.textContent = body.style.background + ";";
//    linear-gradient(to right, rgb(0, 255, 0), rgb(255, 0, 0));
    
})


