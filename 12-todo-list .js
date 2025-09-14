const todoList = [{
    name: 'make dinner',
    dueDate: '05-09-2025',
    name: 'play game',
    dueDate: '05-09-2025'
}];

addList();

function addList() {

    let todoListHtml = '';

    todoList.forEach(function(valueObject , index) {
        const { name, dueDate } = valueObject;

        let html = `
        <div class = "js-name-style">${name}</div>
        <div>${dueDate}</div> 
        <button onclick="
            todoList.splice(${index},1);
            addList();
        " class= "style-button-js">Delete</button>  
        </p>`;

        todoListHtml += html;
    });

    document.querySelector('.js-todoList')
        .innerHTML = todoListHtml;
}

function clickButton() {
    let inputElemnt = document.querySelector('.js-inputName');
    let input = inputElemnt.value;

    let inputeDate = document.querySelector('.js-date');
    let dueDate = inputeDate.value;

    todoList.push({
        name: input,
        // dueDate: dueDate , 
        dueDate
    });


    addList();
}
