const todoInput = document.getElementById('todo-input')
const submitBtn = document.getElementById('submit-btn')
const todoWrapper = document.getElementById('todo-wrapper')


// Add New Todo
submitBtn.addEventListener('click', (e) => {
    e.preventDefault()

    if(todoInput.value === '') {
        alert('This field cant be empty');
        return 
    }

    // New Todo
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('new-todo-div');
    todoWrapper.appendChild(todoDiv);

    // Todo Text
    let newTodoText = document.createElement('p')
    newTodoText.innerText = todoInput.value;
    todoDiv.appendChild(newTodoText);



    // New Task Buttons
    const newTaskButtons = document.createElement('div')
    newTaskButtons.classList.add('new-task-buttons');
    todoDiv.appendChild(newTaskButtons);


    // Complete Task
    const completeBtn = document.createElement('button');
    completeBtn.innerHTML = 'Complete'
    completeBtn.classList.add('complete-button');
    completeBtn.addEventListener('click', () => {
        newTodoText.classList.toggle('completed')
    })
    newTaskButtons.appendChild(completeBtn);
   

    // Remove task
    const removeBtn = document.createElement('button');
    removeBtn.innerHTML = 'Remove'
    removeBtn.classList.add('remove-button')
    removeBtn.addEventListener('click', () => {
        todoDiv.remove();
    })
    newTaskButtons.appendChild(removeBtn)

    // Remove text from input after inserting the task
    todoInput.value = '';

   
    
    
    
});



// Clear Input
const clearBtn = document.getElementById('clear-btn')

clearBtn.addEventListener('click', (e) => {
    e.preventDefault()

    todoInput.value = '';
})


// 




