const inputs = document.querySelector("#inputs input");
const btn = document.querySelector(".btn button");

inputs.addEventListener("input", () => {
  if (inputs.value !== "") {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

let newId = 1;

let todosArray = [];

btn.addEventListener("click", () => {
  let newTodo = { todoName: inputs.value, todoId: newId };
  todosArray.push(newTodo);
  createTodo(newTodo);
  newId++;
});

function createTodo(currTodo) {
  let todoItem = document.createElement("div");
  let todoItemDiv1 = document.createElement("div");
  let todoItemDiv2 = document.createElement("div");
  let radioInput = document.createElement("input");
  let todoInnerDiv = document.createElement("div");
  let currDate = document.createElement("small");
  let newElement = document.createElement("h5");
  let newTodoId = document.createElement("p");

  todoItem.className = "todo-list";
  document.querySelector(".hero").appendChild(todoItem);

  todoItemDiv1.className = "div-1";
  todoItemDiv2.className = "div-2";

  radioInput.type = "radio";
  radioInput.addEventListener("click", () => {
    todoItem.remove();
  });

  currDate.innerText = "2024-08-28";

  newElement.innerText = currTodo.todoName;
  newTodoId.innerText = currTodo.todoId;

  todoItemDiv1.appendChild(radioInput);
  todoItemDiv1.appendChild(todoInnerDiv);
  todoInnerDiv.appendChild(currDate);
  todoInnerDiv.appendChild(newElement);
  todoItemDiv2.appendChild(newTodoId);

  todoItem.appendChild(todoItemDiv1, todoItem.childNodes[0]);
  todoItem.appendChild(todoItemDiv2, todoItem.childNodes[1]);
  if (todoItem !== "") {
    btn.style.display = "none";
  }
  inputs.value = "";
}