/*
* Title: To Do Application using vanilla JS Dom
* Description: This JS file has all the JS functions
necessary to control the to do application
* Author: Sumit Saha ( Learn with Sumit )
* Date: 12/17/2020
* Rewrite: showvike
* Date: 04/09/2021
*
*/

// select elements & assign them to variables
let newTask = document.querySelector("#new-task");
let form = document.querySelector("form");
let todoUl = document.querySelector("#items");
let completeUl = document.querySelector(".complete-list ul");

// functions
let createTask = function(task) {
	let listItem = document.createElement("li");
	let checkBox = document.createElement("input");
	let label = document.createElement("label");

	label.innerText = task;
	checkBox.type = "checkbox";

	listItem.appendChild(checkBox);
	listItem.appendChild(label);

	return listItem;
}

let addTask = function(event) {
	event.preventDefault();
	let listItem = createTask(newTask.value);
	todoUl.appendChild(listItem);
	newTask.value = "";
	// bind the new list item to the incomplete list
	bindInCompleteItems(listItem, completeTask);
}

let completeTask = function() {
	let listItem = this.parentNode;
	let deleteBtn = document.createElement("button");
	deleteBtn.innerText = "Delete";
	deleteBtn.className = "delete";
	listItem.appendChild(deleteBtn);

	let checkBox = listItem.querySelector('input[type="checkbox"]');
	checkBox.remove();
	completeUl.appendChild(listItem);
	bindCompleteItems(listItem, deleteTask);
}

let deleteTask = function() {
	let listItem = this.parentNode;
	let ul = listItem.parentNode;
	ul.removeChild(listItem);
}

let bindInCompleteItems = function(taskItem, checkboxClick) {
	let checkBox = taskItem.querySelector('input[type="checkbox"]');
	checkBox.onchange = checkboxClick;
}

let bindCompleteItems = function(taskItem, deleteButtonClick) {
	let deleteButton = taskItem.querySelector(".delete");
	deleteButton.onclick = deleteButtonClick;
}

for(let I = 0; I < todoUl.children.length; I++) {
	bindInCompleteItems(todoUl.children[I], completeTask);
}

for(let I = 0; I < completeUl.children.length; I++) {
	bindCompleteItems(completeUl.children[I], deleteTask);
}

function main() {
	form.addEventListener("submit", addTask);
}

main();
