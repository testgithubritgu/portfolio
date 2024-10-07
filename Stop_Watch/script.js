const butn1 = document.getElementById("b1")
const butn2 = document.getElementById("b2")
const butn3 = document.getElementById("b3")
const minutes = document.getElementById("min")
const seconds = document.getElementById("sec")
const miliseconds = document.getElementById("ms")
const lapsdata = document.getElementsByClassName("laps")
let sec;
let mili;
let houre;
let hours = 0;
let milisec = 0
let secondscore = 0;
let isplay = true;


function toggle(){
  if(isplay){
    butn1.classList.remove("hidden")
    butn3.classList.remove("hidden")
    play();
    houre = setInterval(()=>{
     
        minutes.innerHTML = ++hours + ":"

    },60*1000)
    sec = setInterval(()=>{
        if(secondscore === 60){
            secondscore =0;
        }
        seconds.innerHTML = ++secondscore + ":"
    },1000);
    mili = setInterval(()=>{
        if(milisec === 100){
            milisec = 0
        }
        miliseconds.innerHTML = ++milisec 
    },10)
  }else{
    minutes.innerHTML = hours
    seconds.innerHTML = secondscore
    miliseconds.innerHTML = milisec
  
  }
}

function play(){
    if(isplay){
        butn2.innerHTML = "pause";
        isplay = false;
    }else{
        butn2.innerHTML = "play"
        isplay= true
    }
}
function reset(){
    butn1.classList.add("hidden")
    butn3.classList.add("hidden")
    clearInterval(sec)
    clearInterval(mili)
    clearInterval(houre)
    hours= 0
    minutes.innerHTML = hours +":"
    milisec = 0
    miliseconds.innerHTML = milisec 
    secondscore = 0
    seconds.innerHTML = secondscore + ":"
    if(isplay){
        butn2.innerHTML = "play";
    }else{
        butn2.innerHTML = "play";
        isplay = true;
    }
    
  
}
function laps(){
    const li = document.createElement("li")
    const spans = document.createElement("span")
    const span2 = document.createElement("span")
    span2.innerHTML = `${hours} : ${secondscore} : ${milisec}`
    // li.appendChild(span2);
    lapsdata.appendChild(li).appendChild(span2)

}
butn3.addEventListener("click", laps)
butn2.addEventListener("click",toggle)
butn1.addEventListener("click", reset)