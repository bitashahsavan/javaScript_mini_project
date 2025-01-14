//variables
const startButton=document.getElementById('start-btn')
const nextButton=document.getElementById('next-btn')
const questionContainerElement=document.getElementById('question-container')
const questionElement=document.getElementById('question')
const answerButtonElement=document.getElementById('answer-buttons')

let shuffledQuestion , currectQuestionIndex ;

startButton.addEventListener('click' ,startGame)
nextButton.addEventListener('click' ,()=>{
    //when click on nextbutton plus to index of arrey for show next quiz
    currectQuestionIndex++
    setNextQuestion()
})

//fuctions
function startGame(){
    startButton.classList.add('hide');
    //for start quiz shuffle the questions random,sort arrey ra moratb mikonad 
    shuffledQuestion= questions.sort(()=> Math.random() - .5);
    //start the question from  0index
    currectQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    // //! me add it
    // nextButton.classList.remove('hide')
    setNextQuestion();
}
function setNextQuestion(){
    resetState();
    //for show questions start from index 0
    showQuestion(shuffledQuestion[currectQuestionIndex])
}
function showQuestion(question){
    //chose the option question into question array
    questionElement.innerText =question.question
    //for any answers make a button
    question.answers.forEach(answer => {
        const button =document.createElement('button')
        //text of button be text of array answer
        button.innerText=answer.text;
        button.classList.add('btn');
        if(answer.correct){
            button.dataset.correct=answer.correct
          
        }
        //when click on any button run the selectanswer
        button.addEventListener('click' ,selectAnswer)
        //answer button that make add last the buttons
         answerButtonElement.appendChild(button)
    });

}
//this function remove last answer 
function resetState(){
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement.firstChild)
        
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    //the last quiz
    if (shuffledQuestion.length > currectQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
      startButton.innerText = 'Restart'
      startButton.classList.remove('hide')
    }
  }
function setStatusClass(element ,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')

    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

//question arrey

const questions = [
    {
      question: 'What is 2 + 2?',
      answers: [
        { text: '4', correct: true },
        { text: '22', correct: false }
      ]
    },
    {
      question: 'Who is the best YouTuber?',
      answers: [
        { text: 'Web Dev Simplified', correct: true },
        { text: 'Traversy Media', correct: true },
        { text: 'Dev Ed', correct: true },
        { text: 'Fun Fun Function', correct: true }
      ]
    },
    {
      question: 'Is web development fun?',
      answers: [
        { text: 'Kinda', correct: false },
        { text: 'YES!!!', correct: true },
        { text: 'Um no', correct: false },
        { text: 'IDK', correct: false }
      ]
    },
    {
      question: 'What is 4 * 2?',
      answers: [
        { text: '6', correct: false },
        { text: '8', correct: true }
      ]
    }
  ]
//!js stepts
//#1 set the functions
//#2add the event start game

