const form = document.querySelector('#todoForm');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

//! retrieve from localStorage if there are items stored
const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

console.log(todosArray)


// ! display tasks
for (let i = 0; i < todosArray.length; i++) {

	let removeBtn = document.createElement('button');
	removeBtn.innerText = 'X';

	let newTodo = document.createElement("li");

	newTodo.innerText = todosArray[i].task;

	newTodo.appendChild(removeBtn);
	todoList.appendChild(newTodo);
}

// ! removing todos from array
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') { // if click on li, add styles
		e.target.style.textDecoration = "line-through";
		e.target.style.color = "gray";


	} else if (e.target.tagName === 'BUTTON') { // remove item from array, remove from localStorage, push new array to localStorage
		e.target.parentNode.remove();



		const newArray = arrayOfTodos.filter((todo) => todo.isCompleted !== false);


		// Put back the "newArray" to localStorage: hint: JSON.stringify(), localStorage.setItem(??, ??);
		localStorage.setItem('todos', JSON.stringify(newArray));

	}
});

// ! on submit create newTodo and save to local storage
form.addEventListener('submit', function (e) {
	e.preventDefault();

	const removeBtn = document.createElement('button');
	removeBtn.innerText = 'X';

	const newTodo = document.createElement('li');
	const value = document.getElementById('task').value;
	newTodo.innerText = value;

	newTodo.appendChild(removeBtn);
	todoList.appendChild(newTodo);

	form.reset();

	//! save to localStorage
	todosArray.push({ task: value, isCompleted: false });
	localStorage.setItem("todos", JSON.stringify(todosArray));
});
