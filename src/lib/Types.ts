
export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};
export type ButtonProps = {
  buttonType?: "Primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => Promise<void>
};
export type DeleteProps = {
  id: number;
  onDeleteTodo: (id: number) => void;
};

export type TodosContextProviderProps = {
  children:React.ReactNode;
}