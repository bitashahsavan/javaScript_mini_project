const tabs=document.querySelectorAll('[ data-tab-target]')
const tabContents=document.querySelectorAll('[data-tab-content]')


tabs.forEach(tab=>{
    tab.addEventListener('click' ,()=>{
        //این کد به ای دی تک تک لیست هادسترسی پیدامیکند
        const target=document.querySelector(tab.dataset.tabTarget)
        tabContents.forEach(tabContent=>{
            //این قطعه کد فق همان محتوای مربوط به ای دی اکتیو رانمایش میدهد
            tabContent.classList.remove('active');
        })

        tabs.forEach(tab=>{
            tab.classList.remove('active');
        })
        tab.classList.add('active');
        target.classList.add('active');
    })

})
