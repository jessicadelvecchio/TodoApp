const form = document.querySelector('#todoForm');
const input = document.querySelector('#task');
const todoList = document.querySelector('#todoList');

//! retrieve from localStorage
const todosArray = JSON.parse(localStorage.getItem("todos")) || [];
console.log(todosArray)



for (let i = 0; i < todosArray.length; i++) {

	let removeBtn = document.createElement('button');
	removeBtn.innerText = 'X';

	let newTodo = document.createElement("li");

	newTodo.innerText = todosArray[i].task;

	newTodo.appendChild(removeBtn);
	todoList.appendChild(newTodo);
}

// ! On li click add css to item 
// ! On button click remove item from array, remove from localStorage, push new array to localStorage
todoList.addEventListener('click', function (e) {
	if (e.target.tagName === 'LI') {
		e.target.style.textDecoration = "line-through";
		e.target.style.color = "gray";

	} else if (e.target.tagName === 'BUTTON') {
		e.target.parentNode.remove();



		const wordToRemove = e.target.parentElement;

		console.log(wordToRemove)

		// Look for the word from "localStorage"
		const arrayOfTodos = JSON.parse(localStorage.getItem("todos"));

		// How do you remove "wordToRemove" from arrayOfTodos??
		// ?  https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript

		const newArray = arrayOfTodos.filter((todo) => todo.task !== wordToRemove);

		// console.log(todo, todo.task);
		// console.log(arrayOfTodos);
		// console.log(newArray);

		// Put back the "newArray" to localStorage: hint: JSON.stringify(), localStorage.setItem(??, ??);
		localStorage.setItem('todos', JSON.stringify(newArray));

	}
});

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
