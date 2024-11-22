import { useEffect, useState } from "react";
import { Todo } from "../lib/Types";
import { createContext } from "react";
import { TodosContextProviderProps } from "../lib/Types";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

type TTodosContext = {
  todos: Todo[];
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
  handleAddTodo: (todoText: string) => void;
  handleDeleteTodo: (id: number) => void;
  handleToggleTodo: (id: number) => void;
};

export const TodosContext = createContext<TTodosContext | null>(null);

const initialTodos = () => {
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos) {
    return JSON.parse(savedTodos);
  } else return [];
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const {isAuthenticated} = useKindeAuth()
  //States
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  //Derived States
  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo) => todo.isCompleted
  ).length;

  //Handlers
  const handleAddTodo = (todoText: string) => {
    if (todos.length >= 3 &&!isAuthenticated) {
      alert("Log in to Add more todos");
      return;
    } else
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: todoText,
          isCompleted: false,
        },
      ]);
  };
  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  const handleToggleTodo = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) {
          return { ...t, isCompleted: !t.isCompleted };
        }
        return t;
      })
    );
  };

  //side effects

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));

    //   const fetchTodos = async ()=>{
    //    const response =  await fetch('http://bytegrad.com/course-assets/api/todos')
    //    const todos = await response.json()
    //    setTodos(todos)
    //   }
    //   fetchTodos()
  }, [todos]);
  return (
    <TodosContext.Provider
      value={{
        todos,
        totalNumberOfTodos,
        numberOfCompletedTodos,
        handleAddTodo,
        handleDeleteTodo,
        handleToggleTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
