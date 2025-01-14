//create variable
const quoteText=document.querySelector('.quote'),
       quoteBtn=document.querySelector('button'),
       authorName=document.querySelector('.author .name'),
       soundBtn=document.querySelector('.sound'),
       copyBtn=document.querySelector('.copy'),
       twitterBtn=document.querySelector('.twitter');
  
//! set random quote button
quoteBtn.addEventListener('click' ,randomQuote) 
//! get random quote
function randomQuote(){
    //show loading quote in btn before load text
    quoteBtn.classList.add('loading')
    quoteBtn.innerText='Loading quote...'
    //fetching random quotes /data from the api and parsing it into javascript object
    fetch('https://api.quotable.io/random').then(res =>res.json()).then(result => {
    quoteText.innerText =result.content;
    authorName.innerText=result.author;
    //after load api or text show new quote button
    quoteBtn.innerText="new quote";
    quoteBtn.classList.remove('loading')

})
}  
//!add text to speech function
soundBtn.addEventListener('click' ,()=>{
    //the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${ quoteText.innerText} by ${authorName.innerText}`);

    //speak method of speechSYnthesis speak the utterance
    speechSynthesis.speak(utterance);
})
//! add copy button function
copyBtn.addEventListener('click' , ()=>{
    //copying the quote text on copyBtn click
    //writeText() property writes the specified text string to the system clipbord
    navigator.clipboard.writeText(quoteText.innerText)
    copyBtn.innerText='copied'
    copyBtn.style.fontSize='10px'
})
//!add twitter button
twitterBtn.addEventListener('click' ,()=>{
    let tweetUrl = `http://twitter.com/intent/tweet?url= ${quoteText.innerText}`;
    alert(' turn on your vpn')
    //opening a new twitter tab with passing quote in the url
    window.open(tweetUrl ,'_blank')
})
  

//!javascript stepes
//#1 create addevenlistener on new quote
//#2 fetch api
//#set laoding button 
//#4 settext to speech button 
//#5 set copy button func
//#6 set tweet url btn