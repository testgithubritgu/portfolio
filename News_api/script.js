

// airoplane API = https://serpapi.com/searches/f692cea26af6d37d/66f6dc76f60b6f85e97824ed.json

let url = `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7e14bde8e33b4dfe934d88f582bcf47e`
const title1 = document.getElementById("title1")
const img = document.getElementById("img")
const mains = document.getElementById("Main")
const inpu = document.getElementById("input")
const h = document.querySelector("h1")
h.innerText = inpu.value
console.log(h)

async function fetchdata(){
    let fetchd  = await fetch(url)
    let data = await fetchd.json();
   
        // mains.appendChild(div)
    // data.articles.forEach(element => {
        

    // });
    // title1.innerHTML = data.articles[0].title
    // img.src = data.articles[0].urlToImage
    console.log(data)
  data.articles.forEach((element) => {
  
    let div = document.createElement("div")
    div.setAttribute("class", "news_data")
    let images = document.createElement("img")
    // const mains = document.getElementsByClassName("Main")
    images.setAttribute("id","img")
    images.src = element.urlToImage
    let texts = document.createElement("h4");
    let para = document.createElement("p");
    para.innerHTML = element.content
    
    if(element.title.length > 50){
        texts.textContent = element.title.slice(0,30) + "...."
    }else{
        texts.textContent = element.title
    }
    element.content.length > 100?  para.innerHTML = element.content.slice(0,100) + "...":element.content


    div.appendChild(images) 
    div.appendChild(texts) 
    div.appendChild(para)
    div.addEventListener("click", ()=>{
        window.open(element.url,"_blank")
    })
    
    mains.appendChild(div)


  });

}


fetchdata()
