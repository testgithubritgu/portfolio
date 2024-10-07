const notescontainer = document.querySelector(".allNotes");
const create_note_button = document.querySelector(".CreateElem");
let notes = document.querySelectorAll(".notesdata");

function shownotes(){
    notes.innerHTML = localStorage.getItem("notes")
}
shownotes();

function updatedata(){
    localStorage.setItem("notes", notes.innerHTML )
}

create_note_button.addEventListener("click",()=>{
    let input1 = document.createElement("div");
    let img  = document.createElement("img");
    input1.classList = "notesdata";
    input1.setAttribute("contenteditable","true");
    img.src = "images/Red-cross-mark-icon-on-transparent-background-PNG.png";
    notescontainer.appendChild(input1).appendChild(img)
})


notescontainer.addEventListener("click", (e)=>{
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        updatedata();
    }
    else if(e.target.tagName === "p"){
        notes = document.querySelectorAll("notesdata");
        notes.forEach(nt=>{
            nt.onkeyup = function(){
                updatedata()
            }
        })
    }
})