
import React, { useContext, useState } from "react";

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
    toggleTodo: (id: number) => void;
  
  deleteTodo: (id: number) => void;
};

const TodoContext = React.createContext<TodoContextType>();

function TodoList() {
  const [task, setTask] = useState("");
  const { todos, addTodo, toggleTodo, deleteTodo } = useContext(TodoContext);

  function handleAddTodo() {
    if (task.trim() !== "") {
        addTodo({
          
        id: Date.now(),
        task,
        completed: false,
      });
        
      setTask("");
    }
  }

  function handleToggleTodo(id: number) {
      toggleTodo(id);
      
  }

    
    
    function handleDeleteTodo(id: number) {
      
    deleteTodo(id);
  }

  return (
    <div>
          <input
              
              type="text"
              
        value={task}
              onChange={(e) => setTask(e.target.value)}
              
      />
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo.id)}
              />
              {todo.task}
            </label>
                 <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
 </ul>
    </div>
  );
}

function App() {
   const [todos, setTodos] = useState<Todo[]>([]);

  function addTodo(todo: Todo) {
    setTodos([...todos, todo]);
  }

  function toggleTodo(id: number) {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  function deleteTodo(id: number) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      <TodoList />
    </TodoContext.Provider>
  );
}

export default App;
