//renderList() // count initial ToDo
countTodos();

// capture click event
document.getElementById('checkAll').addEventListener('click', function() {
    AllDone();
});

//capture enter key press
document.getElementById('todo-to-add').addEventListener('keypress', function(e) {
    e.preventDefault // Do not submit form
    if (e.which == 13) { // check if enter is pressed
        var todo = document.getElementById('todo-to-add').value;
        console.log(todo);
        addToDo(todo);
    }
});

// capture click event
document.getElementById('addTODO').addEventListener('click', function() {
    var todo = document.getElementById("todo-to-add").value;
    console.log(todo);
    addToDo(todo);
});


var todos = document.querySelectorAll('#sortable li input[type="checkbox"]');
for (var i = 0; i < todos.length; i++) {
    todos[i].addEventListener('change', function() {
        if (this.checked == true) {
            var doneItem = this.parentElement.innerText
                // $(this).parent().parent().parent().addClass('remove');
            console.log('done item: ' + doneItem);
            done(doneItem);
            countTodos();
        }
    });
}

// capture click event on button minus on Already Done 
var already_done_elements = document.getElementsByClassName("remove-item");
for (var i = 0; i < already_done_elements.length; i++) {
    already_done_elements[i].addEventListener('click', function() {
        console.log(this);
        removeItem(this);
    });
}

// add new todo
function addToDo(todo) {
    createTodo(todo);
    countTodos();
}

// count tasks (To Complete)
function countTodos() {
    let todolist = document.getElementsByClassName("ui-state-default");
    let size = todolist.length;

    let childSpan = document.getElementsByClassName("count-todos");
    childSpan[0].innerHTML = `${size}`;
}

//create task (To Complete)
function createTodo(text) {
    let child = document.createElement("li");
    child.className = "ui-state-default";

    let innerChild = document.createElement("div");
    innerChild.className = "checkbox"

    let innerLabel = document.createElement("label");

    innerLabel.innerHTML = `
    <input type="checkbox" value="" />${ text}
    `

    child.appendChild(innerChild);
    innerChild.appendChild(innerLabel);

    document.getElementById("sortable").appendChild(child);

    addToStorage(text);
}

//mark task as done (To Complete)
function done(doneItem) {
    let listDone = document.getElementById("done-items");
    let child = document.createElement("li");

    child.innerHTML = ` ${doneItem} `;

    let childButton = document.createElement("button");
    childButton.className = "remove-item btn btn-default btn-xs pull-right";

    let childSpan = document.createElement("span");
    childSpan.className = "fa fa-minus-square";

    childButton.appendChild(childSpan);
    child.appendChild(childButton);
    listDone.appendChild(child);

    // capture click event on button minus on Already Done 
    var already_done_elements = document.getElementsByClassName("remove-item");
    for (var i = 0; i < already_done_elements.length; i++) {
        already_done_elements[i].addEventListener('click', function() {
            console.log(this);
            removeItem(this);
        });
    }
}

//mark all tasks as done (To Complete)
function AllDone() {
    const todos = document.querySelectorAll('#sortable li input[type="checkbox"]');

    for (let i = 0; i < todos.length; i++) {
        const doneItem = todos[i].parentElement.innerText;
        $(todos[i]).parent().parent().parent().addClass('remove');
        console.log
        console.log('done item: ' + doneItem);
        done(doneItem);
    }
    let list = document.getElementById("sortable").childNodes;

    for (let i = 0; i < list.length; i++) {
        if (list[i].className == "ui-state-default remove") {
            list[i].remove();
        }
    }
    countTodos();
}

//remove done task from list (To Complete)
function removeItem(element) {
    let list = document.getElementById("done-items");
    list.removeChild(element.parentElement);
}

function addToStorage(todo) {
    const todoList = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.push(todo);
    localStorage.setItem('todos', JSON.stringify(todoList));
}