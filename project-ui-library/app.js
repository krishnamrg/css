const deleteTodo = document.querySelector('.delete');
const addTodoForm = document.querySelector('.add');
const searchForm = document.querySelector('.search');
const list = document.querySelector('.todos');

searchForm.addEventListener('submit', e => {
    e.preventDefault();
    const searchTerm = e.target.value;
    filterTodos(searchTerm);
});

addTodoForm.addEventListener('submit', e => {
    e.preventDefault();
    const todo = addTodoForm.add.value.trim();
    if(todo.length){
        const newTodo = generateTemplate(todo);
        document.querySelector('.todos').innerHTML += newTodo;;
    }
});

deleteTodo.addEventListener('click', e => {
    if (event.target.classList.contains('delete')){
        event.target.parentElement.remove();
    }
});

const filterTodos = (searchTerm) => {
    Array.from(list.children)
    .filter(todo =>  !todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.add('filtered'));

    Array.from(list.children)
    .filter(todo =>  todo.textContent.toLowerCase().includes(searchTerm))
    .forEach(todo => todo.classList.remove('filtered'));
};

const generateTemplate = todo => 
    `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span>${todo}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>`;

