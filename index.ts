import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

// inside of an interface, you can freely ignore properties if you want to
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

// since the method below is async, by calling axios.get, we will get a promise in return
axios.get(url).then(response => {
  // console.log(response.data);

  // Response.data has properties of:
  // id
  // title
  // completed
  // tells .ts the interface you are defining for the variable
  const todo = response.data as Todo;

  // const ID = todo.ID;
  // const title = todo.Title;
  // const finished = todo.finished;

  // console.log(`
  //   The Todo with ID: ${ID}
  //   Has a title of: ${title}
  //   Is it finished? ${finished}
  // `);

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(`
  //   The Todo with ID: ${id}
  //   Has a title of: ${title}
  //   Is it finished? ${completed}
  // `);

  // order matters
  // logTodo(id, completed, title);
  logTodo(id, title, completed);
});

// const logTodo = (id, title, completed) => {
const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished? ${completed}
  `);
}