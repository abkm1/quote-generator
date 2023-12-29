const quotetext = document.querySelector("blockquote");
const authortext =document.getElementById("author")
const quotebt= document.getElementById("newquote");

quotebt.addEventListener("click",randomequote)
//randome quote function
function randomequote(){
    //get data from api....
    quotebt.innerHTML="Loading Quote"
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
       console.log(result);
       quotetext.innerHTML=result.content;
       authortext.innerHTML=result.author;
       localStorage.setItem("quote",quotetext.innerHTML);
       localStorage.setItem("authorname",authortext.innerHTML);
       quotebt.innerHTML="Get new quote";
    })
}
//for saving after updating the page
function sauvgarder(){
    quotetext.innerHTML=localStorage.getItem("quote");
    authortext.innerHTML=localStorage.getItem("authorname");
}
  sauvgarder()
//functionality of the sound btn
const soundbt=document.getElementById("sound");
soundbt.addEventListener("click", song);
function song(){
    let talk = new SpeechSynthesisUtterance(`${quotetext.innerHTML} by ${authortext.innerHTML}`);
    talk.lang = 'en-GB'; // Set to English with British accent
    speechSynthesis.speak(talk);
    
}
// finctionality of the plus btn
const addbtn=document.getElementById("plus");
addbtn.addEventListener('click',addbutton);
function addbutton(){
    
    const arr = JSON.parse(localStorage.getItem("FavQuotes")) || [];
    arr.push({quote: quotetext.innerHTML, author: authortext.innerHTML});
    localStorage.setItem("FavQuotes", JSON.stringify(arr));
}