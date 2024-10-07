const input = document.getElementById("input");
const forms = document.querySelector("form");
const contentimages = document.getElementById("content_images");
const loading = document.getElementsByClassName("loading")

// const btn = querySelector("button");
let img = document.getElementsByClassName("img");
let pagesize = 30;
let page = 1

// let url = https://api.unsplash.com/search/photos/?query=dog&per_page=10&client_id=M5UffbRHfq50N3JKNF94_jUhcSsFxhQ8_2-fZUOv-A0

let apiKey = "M5UffbRHfq50N3JKNF94_jUhcSsFxhQ8_2-fZUOv-A0";

async function getinput(query,pageno) {
    contentimages.innerHTML = '';
    loading.innerHTML = "";
    let gif = document.createElement("img");
    gif.src = "spinner-8565_256.gif"
    contentimages.appendChild(gif)


  let url = ` https://api.unsplash.com/search/photos/?query=${query}&per_page=${pagesize}&page=${pageno}&client_id=${apiKey}`;

  let res = await fetch(url);
  let data = await res.json();
contentimages.innerHTML = ""
  data.results.forEach((e) => {
    let div = document.createElement("div");
    div.setAttribute("class","src")
    let overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");
    overlayElement.innerHTML = e.alt_description
    let img = document.createElement("img");
    img.setAttribute("class", "img");

    img.src = e.urls.full;
    overlayElement.addEventListener("click", () => {
      window.open(e.urls.full, "_blank");
    });
    // console.log(e.urls.full);

    div.appendChild(img);
    div.appendChild(overlayElement)
    // console.log(e)
    contentimages.appendChild(div);
  });

  let butn1 = document.createElement("button");
  butn1.innerText = "Load More...";
  butn1.addEventListener("click", () => {
    getinput(input.value.trim(),++pageno)
  });
  contentimages.appendChild(butn1);
  
}

function animation(){
    input.classList.add("animation")
    setTimeout(()=>{
        input.classList.remove("animation")
    },2000)
}
forms.addEventListener("submit", (e) => {
  // location.reload()
  e.preventDefault();
  if (input.value !== "") {
    page = 1
    const inputvalues = input.value.trim();
    getinput(inputvalues, page);
    // console.log(input.value)
  } else {

    animation()
    loading.innerHTML = "Loading...."
    contentimages.innerHTML = "no image to show"
    
  }
});
