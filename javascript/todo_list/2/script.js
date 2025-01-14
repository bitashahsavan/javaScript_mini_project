const form = document.getElementById("form");
const textInput=document.getElementById('textInput')
const dateInput=document.getElementById('dateInput')
const textArea=document.getElementById('textarea')
const errorMsg=document.getElementById('msg')
const Tasks=document.getElementById('tasks')
const add=document.getElementById('add')

form.addEventListener('submit' ,(e)=>{
    e.preventDefault();
   formValidtion();
})

const formValidtion = ()=>{
    //failure state
    if(textInput.value=== ''){
        errorMsg.innerText='task cannot be blank'
        console.log('failure');

    }else{//succes state
        console.log('succses');
        errorMsg.innerText=''
        acceptData();
        //when we add ,addbtn close form automaticlly
        //setattribute use attribute in our html
        add.setAttribute('data-bs-dismiss','modal');
        add.click();

        (()=>{
            add.setAttribute('data-bs-dismiss','');
        })()
       
    }

}

//get data and storge in data object
let data =[]

const acceptData =()=>{
    // set task as dynamic
    data.push({
    text:textInput.value,
    date:dateInput.value,
    description:textArea.value
    })
    // data["text"]=textInput.value;
    // data["date"]=dateInput.value;
    // data["description"]=textArea.value;


    console.log(data);
    createTasks();
}
//show tasks on screen
const createTasks=()=>{
    Tasks.innerHTML = "";
    // y is index number in array
    data.map((x, y) => {
      return (Tasks.innerHTML += `
      <div id=${y}>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.date}</span>
            <p>${x.description}</p>
    
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
          </div>
      `);
    });
  
resetForm();
}

//delete tasks when click on trash icon
const deleteTask=(e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id , 1)
        //save data in localstorge
    //first 'data' is just name but second data is our object
    localStorage.setItem('data' ,JSON.stringify(data));

    console.log(   e.parentElement.parentElement.id);
}
//update data onscreen
const editTask=(e)=>{
 let selectedTask= e.parentElement.parentElement

 textInput.value=selectedTask.children[0].innerHTML
 dateInput.value=selectedTask.children[1].innerHTML
 textArea.value=selectedTask.children[2].innerHTML
 deleteTask(e);
}
//reset form after click add btn
const resetForm=()=>{
    textInput.value=''
    dateInput.value=''
    textArea.value=''


}

//get item from local storge
(() => {
    data = JSON.parse(localStorage.getItem("data")) || []
    console.log(data);
    createTasks();
  })();

// !javascript steps
//1.addeevnlistener to add btn
//2.form validattion{1-1:faiure},{1-2:success}
//3.accept data and store in local storge or data object
//4.upload data on screen
//5.after write our tasks form page should be refresh
//6.work on delete icon
//7.update data onscreen
//8.save data in localstorge
//9.upload data from local storge