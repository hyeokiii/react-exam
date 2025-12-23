import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";
import { useCreateTodoMutation } from "@/hooks/mutations/use-create-todo-mutation";

export default function TodoEditor() {
  const { mutate, isPending } = useCreateTodoMutation();
  const [content, setContent] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAddClick = () => {
    if (content.trim() === "") return;
    mutate(content);
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Todo를 입력해주세요."
        value={content}
        onChange={handleChange}
      />
      <Button disabled={isPending} onClick={handleAddClick}>
        추가
      </Button>
    </div>
  );
}
