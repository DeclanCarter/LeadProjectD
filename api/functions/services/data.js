const data = {
    todos: [
      {
        id: 1,
        task: 'Simon',
        assignee: ' Test Lead 1',
        status: 'simonsmanager@gmail.com'
      },
      {
        id: 2,
        task: 'Charles',
        assignee: 'Test Lead 2',
          status: 'charlesmanager@gmail.com'
      },
      
    ]
  };

  module.exports = {
    getToDos: function() {
        return data.todos;
    },
    addToDo: function(task) {
        task.id = data.todos.length + 1;
        data.todos.push(task);
        return {
            message: "task added",
            tasks: data.todos.length
        }
    },
    deleteToDos: function(id) {
        data.todos = data.todos.filter(todo => todo.id != id)
        return {
            message: "task deleted",
            tasks: data.todos.length
        }
    },
    editTodos: function(task) {
        data.todos = data.todos.map(todo => {
            if (todo.id === task.id) todo = task;
            return todo;
        });
        return {
            message: "task edited",
            tasks: data.todos.length
        }
    }
  }