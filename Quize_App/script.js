const questions = [
    {
        question: "The name of which ’80s video game is derived from a Japanese slang term for opening and closing one’s mouth?",
        answer:[
            {texr:"Donkey Kong" ,correct:false},
            {texr:"Tetris" ,correct:false},
            {texr:"Dig Dug" ,correct:false},
            {texr:"Pac-Man" ,correct:true}
        ]
    },
    {
        question: "In November 1983 a shortage of which much sought-after toy led to near-riots in toy stores?",
        answer:[
            {texr:"Beanie Babies" ,correct:false},
            {texr:"Mr. Potato Head" ,correct:false},
            {texr:"Tickle Me Elmo" ,correct:false},
            {texr:"Cabbage Patch Kids" ,correct:true}
        ]
    },
    {
        question: "Which of these ’80s gadgets was originally marketed in the U.S. as “Soundabout”?",
        answer:[
            {texr:"VCR" ,correct:false},
            {texr:"Walkman" ,correct:true},
            {texr:"Game Boy" ,correct:false},
            {texr:"calculator watch" ,correct:false}
        ]
    },
    {
        question: "Which auto company folded before the debut of the movie its car was featured in, Back to the Future?",
        answer:[
            {texr:"DeSoto" ,correct:false},
            {texr:"Saturn" ,correct:false},
            {texr:"DeLorean" ,correct:true},
            {texr:"Studebaker" ,correct:false}
        ]
    },
    {
        question: "What legendary ’80s band famously made venues remove brown M&Ms from their backstage snack tables?",
        answer:[
            {texr:"Mötley Crüe" ,correct:false},
            {texr:"Van Halen" ,correct:true},
            {texr:"Bon Jovi" ,correct:false},
            {texr:"Guns N’ Roses" ,correct:false}
        ]
    }
];


const questionwrite = document.getElementById("qtn");
const answer_button = document.getElementById("answer_button");
const next_answer = document.getElementById("next_answer");
const next_answer2 = document.getElementById("next_answer2")

let currentIndex = 0;
let score = 0;

function StartQuize(){
    let currentIndex = 0;
    let score = 0;
    next_answer.innerHTML = "Next"
    Show_Quest_Answer();
}
function Show_Quest_Answer(){
    resetState();
    let quize = questions[currentIndex];
    let question_number = currentIndex + 1;
    questionwrite.innerHTML = question_number+". "+ quize.question;

    quize.answer.forEach(answer =>{

        const button = document.createElement("button");
        button.innerHTML = answer.texr
        button.classList.add("btn");
        answer_button.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns)

    })
}
function resetState(){
    next_answer.style.display = "none";
    while(answer_button.firstChild){
        answer_button.removeChild(answer_button.firstChild)
    }
}
function selectAns(e){
    const selectbtn = e.target;
    const iscorrect = selectbtn.dataset.correct === "true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect")
    }
    Array.from(answer_button.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct")
        }
        button.disabled = true;
    })
    next_answer.style.display = "block";
    
}
function reload(){
    window.location.reload();
}
next_answer2.addEventListener("click",()=>{
    reload();
})

function showscore(){
    next_answer2.style.display = "block";
    next_answer2.innerHTML = "Play Again"
    resetState();
    questionwrite.innerHTML = `your score is ${score} out of ${questions.length}`
      next_answer.innerHTML = "Play Again";
      
     
  }

function handleevent(){
   
    currentIndex++;
    if(currentIndex < questions.length){
        StartQuize();
          
    }else{
        showscore();
    }
}

next_answer.addEventListener("click", ()=>{
   
    if(currentIndex < questions.length){
       handleevent()
    }else{
        StartQuize();
    }
})


StartQuize();
