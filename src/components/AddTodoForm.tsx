import { useState } from "react";
import Button from "./Button";
import { useTodosContext } from "../lib/Hooks";

export default function AddTodoForm() {
  const [todoText, setTodoText] = useState("");
  const {handleAddTodo} = useTodosContext();



  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleAddTodo(todoText);

        setTodoText("");
      }}
    >
      <h2 className="font-medium text-[#231d15]">Add a todo</h2>
      <input
        onChange={(e) => {
          setTodoText(e.target.value);
        }}
        type="text"
        className="h-[45px] border border-black/[12%] rounded-[5px] my-[9px] text-[14px] block w-full px-[8px]"
        value={todoText}
      />
      <Button>Add to List</Button>
    </form>
  );
}
