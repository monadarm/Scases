const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader=document.getElementById('loader');

loader.hidden=true;
// //Show loading
// function loading(){
//     loader.hidden=false;
//     quoteContainer.hidden=true;
// }

// //Hide loading
// function complete(){
//     if(!loader.hidden){
//     quoteContainer.hidden=false;
//     loader.hidden=true;
//     }
// }

//get quotes from API
let apiquotes=[];

//Show new Quote
function newQuote(){
    //Pick a radnom quote
    const quote=apiQuotes[Math.floor(Math.random()*apiQuotes.length)];
    //author check
    if(!quote.author){
        authorText.textContent='Unknown';
    } else {
    authorText.textContent=quote.author;
    }
    
    //Check quote length to determine styling
    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote');
      } else {
        quoteText.classList.remove('long-quote');
      }
      
      quoteText.textContent=quote.text;
}

async function getQuotes(){
    
 const apiUrl='https://type.fit/api/quotes';
 try{
    const response=await fetch(apiUrl);
    apiQuotes=await response.json();
    newQuote();
 } catch(error) {
    
 }
}

//Tweet
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//EventListeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote);


getQuotes();