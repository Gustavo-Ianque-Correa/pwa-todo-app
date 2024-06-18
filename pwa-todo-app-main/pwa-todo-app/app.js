document.getElementById('todo-form').addEventListener("submit", function(e){
	e.preventDefault();
	const input= document.getElementById("todo-input");
	addTodo(input.value);
	input.value = "";
});
function addTodo(tarefa){
	const list = document.getElementById("todo-list");
	const listItem = document.createElement("li");
	listItem.textContent = tarefa;
	list.appendChild(listItem);
}