const Name=document.getElementById('name');
const form=document.getElementById('form');
const error=document.getElementById('error');

form.addEventListener('submit' ,(e)=>{

    let message=[];
    if(Name.value === '' || Name.value == null){
     
        message.push('hi bita');
    }
    if(message.length > 0){
        e.preventDefault();
        error.innerText = message .join(' , ')
    }
})