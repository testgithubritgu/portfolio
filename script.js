var typed = new Typed("#text",{
    strings:["FrontEnd Devloper","web Devloper","YouTuber"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})
document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault();
})
// const scrollActive = ()=>{
//     const SwapTech = document.getElementById("SwapTech");
//     this.scrolly >= 50 ? SwapTech.classList.add("SwapTech"): SwapTech.classList.remove("SwapTech")
// }
// window.addEventListener("scroll", scrollActive);
// const sr = scrollActive({
//     origin:'top',
//     distance:'60px',
//     duration:2500,
//     delay:400,
//     // reset:true
// })
// // sr.reveal('.SwapTech')   
// sr.reveal('.info_section' , {origin:'left', delay:800})   