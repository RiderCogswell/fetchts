import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// this is us telling typescript what were working with
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(response => {
  // as is linking the interface to the response data
  const todo = response.data as Todo;

  // must be direct and exactly as data is stated.
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed)
});

// type annotations, if we were to pass completed in at the second arg, error would be thrown
const logTodo = (id: number, title: string, completed: boolean) => {
   console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}