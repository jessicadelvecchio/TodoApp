// const form = document.querySelector('#todoForm');
// const input = document.querySelector('#task');
// const todoList = document.querySelector('#todoList');

// //! retrieve from localStorage if there are items stored
// const todosArray = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];

// console.log(todosArray)


// // ! display tasks
// for (let i = 0; i < todosArray.length; i++) {

// 	let removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'X';

// 	let newTodo = document.createElement("li");

// 	newTodo.innerText = todosArray[i].task;

// 	newTodo.appendChild(removeBtn);
// 	todoList.appendChild(newTodo);
// }

// // ! removing todos from array
// todoList.addEventListener('click', function (e) {
// 	if (e.target.tagName === 'LI') { // if click on li, add styles
// 		e.target.style.textDecoration = "line-through";
// 		e.target.style.color = "gray";


// 	} else if (e.target.tagName === 'BUTTON') { // remove item from array, remove from localStorage, push new array to localStorage
// 		e.target.parentNode.remove();

// 		for (let i = 0; i < todosArray.length; i++) {

// 			todosArray[i].isCompleted === true;

// 			console.log(todosArray[i])
// 		}




// 		//  filter out todos that ARE completed
// 		const newArray = todosArray.filter((todo) => todo.isCompleted !== true);
// 		console.log(newArray)



// 		// Put back the "newArray" to localStorage
// 		localStorage.setItem('todos', JSON.stringify(newArray));

// 	}
// });

// // ! on submit create newTodo and save to local storage
// form.addEventListener('submit', function (e) {
// 	e.preventDefault();

// 	const removeBtn = document.createElement('button');
// 	removeBtn.innerText = 'X';

// 	const newTodo = document.createElement('li');
// 	const value = document.getElementById('task').value;
// 	newTodo.innerText = value;

// 	newTodo.appendChild(removeBtn);
// 	todoList.appendChild(newTodo);

// 	form.reset();

// 	// //! save to localStorage
// 	// todosArray.push({ task: value, isCompleted: false });
// 	// localStorage.setItem("todos", JSON.stringify(todosArray));
// });

// ! code start
const todoList = document.querySelector(".todo-list"); // create variable ul where todos will be displayed
const todoListForm = document.querySelector(".todo-list-form"); // create variable for form where todos are being submitted

// ! create event listener on todoListForm sumbit to run fn handleSubmit
todoListForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
	e.preventDefault();

	// create span > li > innertext with form entry value
	const todoValue = document.querySelector(".todo-entry-input").value;
	const todoListItem = document.createElement("li");
	const todoListItemText = document.createElement("span");
	todoListItemText.innerText = todoValue;
	todoListItem.appendChild(todoListItemText);
	todoList.appendChild(todoListItem);
	todoListForm.reset();

	// add event listener to each new li that will add/remove the class "completed" on click
	todoListItem.addEventListener("click", function () {
		todoListItem.classList.toggle("completed");
	});

	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "X";
	deleteBtn.addEventListener("click", function () {
		deleteBtn.parentElement.remove();
	});
	todoListItem.prepend(deleteBtn);
}
