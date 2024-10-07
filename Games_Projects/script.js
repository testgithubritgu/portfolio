let countMonkey;
let score = 0;
const para = document.getElementById("para");



window.onload = function (){
    startgame();
}

function startgame(){
    for(let i = 0 ; i<9;i++){
        let divs = document.createElement("div")
        divs.id = i.toString()
        divs.addevEntlistner("click", showscore)
        document.getElementById("content").appendChild(divs)
    }
    

//    setInterval(showimage, 2000)
   para.innerHTML = score;
}
function img_id(){
    let num = Math.floor(Math.random(   )*9);
    return num.toString()
}


function showimage(){
    
    // let img = document.createElement("img");
    // img.src = "./pngwing.com (1).png"
    // let num = img_id();
    // img.id = num
    // img.addEventListener("click", ()=>{
    //     score++;
    // })
    // countMonkey = document.getElementById(num)
    // countMonkey.appendChild(img)
}

