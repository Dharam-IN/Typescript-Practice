import './style.css'

interface Todo {
  title: string,
  isCompleted: boolean,
  readonly id: string
}

const todos: Todo[] = [];

const todosContainer = document.querySelector(".todosContainer") as HTMLDivElement;

const todoInput = document.getElementsByName('title')[0] as HTMLInputElement;

const myForm = document.getElementById("myForm") as HTMLFormElement;

myForm.onsubmit = (e) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: String(Math.floor(Math.random() * 1000))
  }

  todos.push(todo)
  todoInput.value = "";
  // console.log(todos)
  renderTodo(todos)
}

const generateTodoItem = (item: string, isCompleted: boolean, id: string) => {
  const todo: HTMLUListElement = document.createElement("ul");
  const todoli: HTMLLIElement = document.createElement("li");

  const checkbox: HTMLInputElement = document.createElement("input");

  checkbox.setAttribute("type", "checkbox");
  checkbox.className = "isCompleted checkBOX"
  checkbox.checked = isCompleted;

  checkbox.onchange = () => {
    paragraph.className = checkbox.checked ? "textCut" : ""
  }

  // Creating p for title
  const paragraph: HTMLParagraphElement = document.createElement("p");
  paragraph.innerText = item;

  // Creating delete button
  const btn:HTMLButtonElement = document.createElement("button");
  btn.innerText = "X"

  btn.onclick = () => {
    deleteBTN(id);
  }

  todoli.append(checkbox, paragraph, btn)
  todo.append(todoli);
  todosContainer.append(todo)

}

const deleteBTN = (id: String) => {
  const findIndex = todos.findIndex((item) => item.id === id);
  todos.splice(findIndex, 1);
  renderTodo(todos)
}

const renderTodo = (todos: Todo[]) =>{
  todosContainer.textContent = ""
  todos.forEach((item) => {
    generateTodoItem(item.title, item.isCompleted, item.id)
  })
}