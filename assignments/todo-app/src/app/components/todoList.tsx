"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";
import { Trash2 } from "lucide-react";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function TodoList() {
  // Add some fake tasks here for testing the layout
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Learn Next.js", completed: false },
    { id: 2, text: "Create a To-Do List App", completed: false },
    { id: 3, text: "Read documentation on React", completed: true },
    { id: 4, text: "Build a portfolio site", completed: false }
  ]);
  
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto mt-12 p-8 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
        To-Do List
      </h1>
      
      <div className="flex space-x-4 mb-8">
        <Input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a task..."
          className="flex-1 p-4 border border-gray-300 rounded-lg"
          onKeyPress={(e) => e.key === 'Enter' && addTodo()}
        />
        <Button onClick={addTodo} className="px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Add Task</Button>
      </div>

      <h2 className="text-2xl font-semibold mb-4 text-gray-700">Your Tasks</h2>
      
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center p-6 bg-gray-50 rounded-lg shadow-md"
          >
            <div className="flex items-center space-x-3">
              <Checkbox
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id)}
                id={`todo-${todo.id}`}
              />
              <label
                htmlFor={`todo-${todo.id}`}
                className={`text-lg ${todo.completed ? "line-through text-gray-500" : "text-gray-800"}`}
              >
                {todo.text}
              </label>
            </div>
            <Button
              onClick={() => deleteTodo(todo.id)}
              aria-label="Delete task"
              className="text-red-500 hover:bg-red-100 rounded-full p-2"
            >
              <Trash2 className="h-5 w-5" />
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
