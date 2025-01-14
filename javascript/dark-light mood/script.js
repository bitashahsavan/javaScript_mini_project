const sunMoodContainer=document.querySelector('.sun-mood-container');

document.querySelector('.theme-toggle-button').addEventListener('click' ,()=>{
    document.body.classList.toggle('dark');
    const currentRotation=parseInt(getComputedStyle(sunMoodContainer).getPropertyValue('--rotation'))
    sunMoodContainer.style.setProperty('--rotation', currentRotation+ 180)
})

//روش کاربه این صورت است که مایکسری ویزگیها که قراراست تغییرکنه دریک کلاس در سی اس اس تعریف میکنیم که وقتی باجی اس اون کلاس وبه بادی میدهیم یکسری ویزگی هاتغییرمیکند