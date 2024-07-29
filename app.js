// ! code start
const todoList = document.querySelector(".todo-list"); // create variable ul where todos will be displayed
const todoListForm = document.querySelector(".todo-list-form"); // create variable for form where todos are being submitted
let todoArray; // create variable for array of todos

// ! check to see if there are any todos saved in localStorage
if (localStorage.todos) {
	todoArray = JSON.parse(localStorage.todos);
} else {
	todoArray = [];
}

// ! display todos -- for every todo that is in todoArray, run addTodoToList
for (let todo of todoArray) {
	addTodoToList(todo.value, todo.completed); // uses todo object.value key
}

// ! create event listener on todoListForm sumbit and run handleSubmit()
todoListForm.addEventListener("submit", handleSubmit);

// ! on submit, take todoValue and pass to addToLocalStorage() and addTodoToList()
function handleSubmit(e) {
	e.preventDefault();
	const todoValue = document.querySelector(".todo-entry-input").value;
	addToLocalStorage(todoValue); // ***** add new todoValue to localStorage *****
	addTodoToList(todoValue); // create span > li > innertext with form entry value
	todoListForm.reset();
}

// ! create span > li > innertext with form entry value
function addTodoToList(todoValue, completed = false) {
	// create span > li > innertext with form entry value 
	const todoListItem = document.createElement("li");
	if (completed) {
		todoListItem.classList.add("completed");
	}
	const todoListItemText = document.createElement("span");
	todoListItemText.innerText = todoValue;
	todoListItem.appendChild(todoListItemText);
	todoList.appendChild(todoListItem);


	// add event listener to each new li that will add/remove the class "completed" on click
	todoListItem.addEventListener("click", function () {
		todoListItem.classList.toggle("completed");
		for (let todo of todoArray) { // loop through todoArray
			if (todo.value === todoValue) { // if todo.value === todoValue, flip the completed boolean
				todo.completed = !todo.completed;
				break;
			}
		}
		localStorage.setItem("todos", JSON.stringify(todoArray));  // ***** update localStorage *****
	});

	// create delete button to beginning of each li
	const deleteBtn = document.createElement("button");
	deleteBtn.innerText = "X";

	// add event listener to remove clicked li from todos list
	deleteBtn.addEventListener("click", function () {
		deleteBtn.parentElement.remove(); //remove the li parent item on click
		removeFromLocalStorage(todoValue); // ***** remove todoValue from localStorage *****
	});

	todoListItem.prepend(deleteBtn);

}

// ! add to localStorage
function addToLocalStorage(todoValue) {
	todoArray.push({ // creates an array of objects -- includes each todoValue and if it is completed or not. Completed status is in relation to the class "completed" which is toggled on and off li click
		value: todoValue,
		completed: false,
	}); // add each new todo to the todoArray
	localStorage.setItem("todos", JSON.stringify(todoArray)); // set the todoArray as the value of "todos" as a string in localStorage
}

// ! remove from localStorage
function removeFromLocalStorage(todoValue) {
	for (let i = 0; i < todoArray.length; i++) { //loop through todoArray to find the index of the matching todo and remove it from the todoArray
		if (todoArray[i].value === todoValue) { // compares todo object.value key
			todoArray.splice(i, 1);
			break;
		}
	}
	localStorage.setItem("todos", JSON.stringify(todoArray)); // update localStorage
}