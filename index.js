let AddBtn = document.querySelector('#AddBtn');
let AddInput = document.querySelector('#AddToDo');
let ToDoList = document.querySelector('#ToDoList');

AddBtn.addEventListener('click', () => {
    if(AddInput.value.length == 0) alert("Enter a task!");
    else {
        ToDoList.innerHTML += `
        <div class="ToDo">
            <span id="ToDoName">${AddInput.value}</span>
            <button class="delete">X</button>
        </div>
        `;

        var current_todos = document.querySelectorAll(".delete");
        for(var i = 0; i < current_todos.length; i++) {
            current_todos[i].onclick = function() {
                this.parentNode.remove();
            } 
        }
        AddInput.value = '';
    }
})