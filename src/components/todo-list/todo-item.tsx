import { useDeleteTodo } from "@/store/todo";
import { Button } from "../ui/button";

export default function TodoItem({
  id,
  content,
}: {
  id: number;
  content: string;
}) {
  const deleteTodo = useDeleteTodo();
  return (
    <div className="flex items-center justify-between border p-2">
      {content}
      <Button variant="destructive" onClick={() => deleteTodo(id)}>
        삭제
      </Button>
    </div>
  );
}
