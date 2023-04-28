let startButton = document.getElementById("st_button");
let gitDiv = document.getElementsByClassName("child");
let seconds = 59;
let appendSeconds = document.getElementById("seconds");
let interval;

    startButton.onclick=function(){
        interval = setInterval(startTimer,1000);
        addRandom();
         
    };
    function startTimer(){
        seconds--;
        if(seconds <= 9){
            appendSeconds.innerHTML="0"+seconds;
        }
        if(seconds>9){
            appendSeconds.innerHTML=seconds;
        }
        if(seconds == 0){
            clearInterval(interval);
        }
}

function addRandom(){
    let row1 = Math.floor(Math.random()*(3-0+1))+0;
    let row2 = Math.floor(Math.random()*(7-4+1))+4;
    let row3 = Math.floor(Math.random()*(11-8+1))+8;
    let row4 = Math.floor(Math.random()*(15-12+1))+12;

    let img1 = document.createElement("img");
    let img2 = document.createElement("img");
    let img3 = document.createElement("img");
    let img4 = document.createElement("img");

    let source1 = Math.floor(Math.random()*(12-9+1))+1;
    let source2 = Math.floor(Math.random()*(12-9+1))+1;
    let source3 = Math.floor(Math.random()*(12-9+1))+1;
    let source4 = Math.floor(Math.random()*(12-9+1))+1;

    img1.src = `images/${source1}.jpg`;
    img2.src = `images/${source2}.jpg`;
    img3.src = `images/${source3}.jpg`;
    img4.src = `images/${source4}.jpg`;
    
    (gitDiv[row1]).appendChild(img1);
    (gitDiv[row2]).appendChild(img2);
    (gitDiv[row3]).appendChild(img3);
    (gitDiv[row4]).appendChild(img4);
}
let start = document.getElementsByClassName("child")[0];
start.focus();
start.style.backgroundColor = 'green';
function moving(sibling){
    if(sibling != null){
    start.focus();
    start.style.backgroundColor = '';
    sibling.focus();
    sibling.style.backgroundColor = 'green';
    start = sibling;
    }
}
document.onkeydown = checkKey;

function checkKey(e) {
  e = e || window.event;
 if (e.keyCode == '37') {
    // left arrow
    var sibling = start.previousElementSibling;
    moving(sibling);
  } else if (e.keyCode == '39') {
    // right arrow
    var sibling = start.nextElementSibling;
    moving(sibling);
  }
}






