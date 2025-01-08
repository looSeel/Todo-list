document.getElementById('addTodo').addEventListener('click', function () {
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');
    
    if (todoInput.value.trim() !== "") {
        const li = document.createElement('li');
        li.textContent = todoInput.value;
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function () {
            li.remove();
        });

        li.appendChild(deleteBtn);
        todoList.appendChild(li);
        todoInput.value = '';
    } else {
        alert("Please enter a task!");
    }
});
