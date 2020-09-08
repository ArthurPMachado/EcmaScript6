class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  
}

const ListaDeTarefas = new TodoList();

document.getElementById('novotodo').onclick = function() {
  ListaDeTarefas.add('Outro ToDo');
}