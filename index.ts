#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];

let loop = true;

while (loop) {
  let addwork: {
    todo: string;
    todomore: boolean;
  } = await inquirer.prompt([
    {
      name: "todo",
      type: "input",
      message: "what  you want  to do ",
    },
    {
      name: "todomore",
      type: "confirm",
      message: "want do more works",
      default: "false",
    },
  ]);
  let { todo, todomore } = addwork;
  console.log(addwork);
  loop = todomore;
  if (todo) {
    todos.push(addwork.todo);
  } else {
    console.log("kindly add sometheing");
  }
  if (todos.length > 0) {
    console.log("here your to do list");
    todos.forEach((todo) => {
      console.log(todo);
    });
  } else {
    console.log("no todos found ");``
  }
}
