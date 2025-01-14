
//به طور کلی، زمانی که می خواهید اشیایی ایجاد کنید که داده های داخلی خود را ذخیره می کنند و رفتارهای زیادی را نشان می دهند، باید از کلاس ها استفاده کنید.
//currentOperand=درواقع این همان عددی است که درایم وارد میکنیم
//oreviousOperand=درواق عددی که بعد ازواردن کردن عماگر به کناررفته

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
      this.previousOperandTextElement = previousOperandTextElement
      this.currentOperandTextElement = currentOperandTextElement
      this.clear()
    }
  //این تابع نمایشگرراخالی میکند درواق عدد حال حاضر وعدد قبل را خالی می کند
    clear() {
      this.currentOperand = ''
      this.previousOperand = ''
      this.operation = undefined
      
    }
  //این تابع عدد حال حاضر را به رشته تبدیل کرده ویدونه اخری راپاک میکند
    delete() {
      this.currentOperand = this.currentOperand.toString().slice(0, -1)

    }
//درواق اینجا نامبر همان متن روی دکمه هاست
    appendNumber(number) {
        //اگر عدد .بود ویا شامل .بود درواقع همون اعشاری بود عدد بعدی رااضافه کن
      if (number === '.' && this.currentOperand.includes('.')) return
      //درواقع وقتی روی هردکمه کلیک میکنیم متن ان دکمه به اضافه متن دکمه قبلی که زدیم باهم نمایش دهد تاعدد ساخته شود
      this.currentOperand = this.currentOperand.toString() + number.toString()
    }
  
    chooseOperation(operation) {
        // اگربعداززدن عملگر عددی وارد نشد هیچ کاری نکن درواقع نمیشود دوعملگر راپشت هم وارد کرد 
      if (this.currentOperand === '') return
      //اگر عدد قبلی خالی نبود درواقع کاربر بعدازعملگر عدد وارد کرد حالا تابع حساب کردن رافراخوانی کن
      if (this.previousOperand !== '') {
        this.compute()
      }
      this.operation = operation
      this.previousOperand = this.currentOperand
      this.currentOperand = ''

    }
  
    compute() {
      let computation
      //عدد قبا وعدد حال حتضر میتوانند اغشاری باشند
      const prev = parseFloat(this.previousOperand)
      const current = parseFloat(this.currentOperand)
      //اگر عدد قبل وبعدمون عدد نبود هیچ کاری نکن
      if (isNaN(prev) || isNaN(current)) return
      //اگرعملگرمون+بود دو عدد راباهم جمع کن
      switch (this.operation) {
        case '+':
          computation = prev + current
          break
        case '-':
          computation = prev - current
          break
        case '*':
          computation = prev * current
          break
        case '÷':
          computation = prev / current
          break
          case '%':
          computation = prev % current
          break
        default:
          return
      }
      //عدد حال حاضر راهمان عددی که حساب شده بزار
      this.currentOperand = computation
      this.operation = undefined
      //بعد ازدن مساوی عدد قبلی هم خالی شود
      this.previousOperand = ''
    }
  //این تابع برا ینمایش صحیح اعداد اعشاری وایجاد کاما بین اعداد بزرگ است
    getDisplayNumber(number) {
      const stringNumber = number.toString()
      const integerDigits = parseFloat(stringNumber.split('.')[0])
      const decimalDigits = stringNumber.split('.')[1]
      let integerDisplay
      if (isNaN(integerDigits)) {
        integerDisplay = ''
      } else {
        integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
     }
  //
    updateDisplay() {
      //عدد جدیدی که وارد میکنیم ازفیلتر تابع قبل عبورکند
      this.currentOperandTextElement.innerText =
        this.getDisplayNumber(this.currentOperand)
      if (this.operation != null) {//اگرکاربر عملگری وارد کرد
        this.previousOperandTextElement.innerText =// متن عدد قبل به اضافه عملگر نمایش داده شود
          `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
    }
  }
  
  //set variable
  const numberButtons = document.querySelectorAll('[data-number]')
  const operationButtons = document.querySelectorAll('[data-operation]')
  const equalsButton = document.querySelector('[data-equals]')
  const deleteButton = document.querySelector('[data-delete]')
  const allClearButton = document.querySelector('[data-all-clear]')
  //دیو مربوط به عدد قبلی که حساب شده درواقع عددی که بعداززدن عملگراهاحساب شده وبه کناررفته
  const previousOperandTextElement = document.querySelector('[data-previous-operand]')
  //دیو مربوط عددی که درحال حاضر داریم وارد میکنیم
  const currentOperandTextElement = document.querySelector('[data-current-operand]')

  //یک ابجکت میسازیم که عددی که ازقبل حساب شد وکناررفت وعددجدیدمون رادرخود نکه دارد
  const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


//وقتی روی هرعدد کلیک کردیم متن ان عدد رابگیرد ودر دیس پلی نمایش دهد
  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.innerText)
      calculator.updateDisplay()
    })
  })
//وقتی روی هرعملگر کلیک کردیم متن ان عملگر رابگیرد ودر دیس پلی نمایش دهد
  operationButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.innerText)
      calculator.updateDisplay()
    })
  })
//وقتی روی دکمه مساوی کلیک میکنیم  تابع کامیوت فراخوانی شود ونتیجه نمایش داده شود
  equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
  })
  
  //وقتی روی دکمه ACکلیک میکنیم تابع کلیر فراخوانی شود
  allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
  })
  //وقتی روی دکمه حذف کلیک میکنیم تابع حذف فراخوانی شود
  deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
  })
  