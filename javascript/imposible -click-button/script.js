const evilButton=document.getElementById('evil-button');
 const OFFSET =100;


evilButton.addEventListener('click' ,()=>{
    alert('عمرا بتونی!');
    window.close()
})


//پوزیشن موس را پیدامی کند
document.addEventListener('mousemove' ,(e)=>{

    //position of mouse
    const x=e.pageX;
    const y=e.pageY;
    //position of button
    const buttonBox = evilButton .getBoundingClientRect();
    //فاصله تادکمه راحساب می کند افقی وعمودی
    const horizontalDistanceFrom = distanceFromCenter(buttonBox.x, x, buttonBox.width)
    const verticalDistanceFrom = distanceFromCenter(buttonBox.y, y, buttonBox.height)

    //!متوجه نمیشوم
    const horizontalOffset = buttonBox.width / 2 + OFFSET
    const verticalOffset = buttonBox.height / 2 + OFFSET

    if (Math.abs(horizontalDistanceFrom) <= horizontalOffset && Math.abs(verticalDistanceFrom) <= verticalOffset) {
        setButtonPosition(
          buttonBox.x + horizontalOffset / horizontalDistanceFrom * 10,
          buttonBox.y + verticalOffset / verticalDistanceFrom * 10
         
        )
    }
  })

  function setButtonPosition(left,top){
    const windowBox = document.body.getBoundingClientRect()
    const buttonBox = evilButton.getBoundingClientRect()
  //این کدها باعث میشوند دکمه ازصفحه خارج نشود وازراست بیرون رود ازچپ داخل شود وازبالا بیرون برود از پایین داخل شود
    if(distanceFromCenter(left, windowBox.left, buttonBox.width) < 0) {
      left = windowBox.right - buttonBox.width - OFFSET
    }
    if(distanceFromCenter(left, windowBox.right, buttonBox.width) > 0) {
      left = windowBox.left + OFFSET
    }
    if(distanceFromCenter(top, windowBox.top, buttonBox.height) < 0) {
      top = windowBox.bottom - buttonBox.height - OFFSET
    }
    if(distanceFromCenter(top, windowBox.bottom, buttonBox.height) > 0) {
      top = windowBox.top + OFFSET
    }
    //فاصله ازچپ وبالا را حساب میکنیم ونمیگذازد موس به دکمه نزذیک شود
     evilButton.style.left = `${left}px`
     evilButton.style.top = `${top}px`
    console.log(x,y);
  }
function distanceFromCenter(boxPosition, mousePosition, boxSize) {
    return boxPosition - mousePosition + boxSize / 2
  }

//!قدم های جاوااسکریپت

//#1پیداکردن پوزیشن موس
//#2پیداکردن پوزیشن باتن یادکمه
//#3موقعیت موس ودکمه راازمرکز حساب می کنیم که هرچی به دکمه نزدیکترمیشویم به عدد صفر نزدیک میشویم