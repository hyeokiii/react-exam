import { useMutation } from "@tanstack/react-query";
import { createTodo } from "@/api/create-todo";

export function useCreateTodoMutation() {
  return useMutation({
    mutationFn: createTodo,
    onMutate: () => {}, //요청 시작
    onSettled: () => {}, //요청 종료
    onSuccess: () => {
      window.location.reload();
    }, //요청 성공
    onError: () => {}, //요청 실패
  });
}
