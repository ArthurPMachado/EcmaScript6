class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo() {
    this.todos.push('Novo todo');
    console.log(this.todos);
  }
}

const ListaDeTarefas = new TodoList();

document.getElementById('novotodo').onclick = function() {
  ListaDeTarefas.addTodo();
}