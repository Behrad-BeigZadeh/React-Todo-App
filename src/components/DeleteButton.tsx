import { DeleteProps } from "../lib/Types";
export default function DeleteButton({ id, onDeleteTodo }: DeleteProps) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onDeleteTodo(id);
      }}
    >
      ❌
    </button>
  );
}
