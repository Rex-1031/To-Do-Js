//Selectors
document.querySelector("form").addEventListener('submit', handleSubmitForm );
document.querySelector('ui').addEventListener('click', handleCompletedItem)

//Event Handlers
function handleSubmitForm(e) {
    e.preventDefault();
    let input = document.querySelector('input');
    if (input != '' ){
        addTodo(input.value !='');
        input.value = '';
    }
}

function handleCompletedItem(){
    
}

//Helpers
function addTodo (todo){
    let ul = document.querySelector('ui');
    let li = document.createElement('li');

    li.innerHTML = `
    <span>${todo}</span>
    `
    li.classList.add('todoListItem');
    ul.appendChild(li)
}
