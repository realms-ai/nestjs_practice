import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
  logTodo1(todo);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title fo: ${title}
    Is it finished? ${completed}
  `);
};

const logTodo1 = (info: Todo) => {
  console.log(`
    The Todo with ID: ${info.id}
    Has a title fo: ${info.title}
    Is it finished? ${info.completed}
  `);
};
