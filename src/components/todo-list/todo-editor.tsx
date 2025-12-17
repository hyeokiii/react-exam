import { useCreateTodo } from "@/store/todo";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { useState } from "react";

export default function TodoEditor() {
  const createTodo = useCreateTodo();
  const [content, setContent] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  const handleAddClick = () => {
    createTodo(content);
    setContent("");
  };
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Todo를 입력해주세요."
        value={content}
        onChange={handleChange}
      />
      <Button onClick={handleAddClick}>추가</Button>
    </div>
  );
}
