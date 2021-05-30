var numofSquares=6;
var colors=[];
var pickedColor;
var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var resetButtonn=document.querySelector("#reset");
var modeButtons =document.querySelectorAll(".mode");
var colorDisplay=document.getElementById("colorDisplay");
var messageDisplay=document.querySelector("#message");

init();

function init(){
    //mode buttons event listeners
    setupModeBtn();
    setupsquares();    
    reset();
}
function setupModeBtn(){
    for(var i=0;i<modeButtons.length;i++)
    {
        modeButtons[i].addEventListener("click", function(){
            //removing selected class from both the buttons
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            //adding selected class on the clicked button
            this.classList.add("selected");
            this.textContent==="EASY" ? numofSquares=3 : numofSquares=6;       
            reset();
        });
    }
}

function setupsquares(){
    for(var i=0;i<squares.length;i++)
    {  
        //add click listeners to squares
        squares[i].addEventListener("click",function(){
            //grab color of clicked square
            //alert(this.style.background);
            var clickedColor=this.style.background;
            console.log(pickedColor);

            //compare color to pickedcolor
            if(clickedColor === pickedColor) 
            {
                messageDisplay.textContent="Correct!!";
                resetButtonn.textContent="Play Again?";
                changeColors(clickedColor);
                h1.style.background=clickedColor;
            }
            else 
            {
                this.style.background="#232323";
                messageDisplay.textContent="Try Again";
            }
        });
    }
}
function reset(){
    resetButtonn.textContent="New Colors";
    //generate all new colors
    colors=generateRandomColors(numofSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //changing the correct to empty
    messageDisplay.textContent="";
    //chage color display to match picked color
    colorDisplay.textContent=pickedColor;
    //change colors of the square
    for(var i=0;i<squares.length;i++)
    {
        if(colors[i])
        {
            squares[i].style.display="block";
            squares[i].style.background=colors[i];
        }
        else squares[i].style.display="none";
        
    }
    h1.style.background="steelblue";
}

resetButtonn.addEventListener("click",function(){
    reset();
});

//display color in heading
function changeColors(color){
    //loop all squares to match the given color
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.background=color;
    }
}
function pickColor(){
    var random=Math.floor(Math.random()*colors.length); 
    console.log(colors.length);
    console.log(random);
    return colors[random];
}


function generateRandomColors(num){
    //make an arr 
    var arr=[];
    //add num random colors to array
    for(var i=0;i<num;i++)
    {
        //get random colour
        arr.push(randomColor());
        console.log(randomColor());
    }
    //return  the arr
    return arr;
}

function randomColor(){
    //pick a red,green,blue from 0-255;
    var red=Math.floor(Math.random()*256);
    var green=Math.floor(Math.random()*256);
    var blue=Math.floor(Math.random()*256);
    //"rgb[r,g,b]"
    return "rgb("+ red + ", " + green + ", " + blue + ")";
}
