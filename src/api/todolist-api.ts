import {instance} from "./common-instance";
import {CommonResponseType} from "./common-types";

type TodoType = {
  id: string
  addedDate: string
  order: number
  title: string
}

export const todolistApi = {
  getTodolists() {
    return instance.get<Array<TodoType>>('/todo-lists')
  },
  createTodo(title: string){
    let promise = instance.post<CommonResponseType<{item: TodoType}>>('/todo-lists', {title})
    return promise
  },
  deleteTodo(todolistId: string){
    return instance.delete<CommonResponseType>(`/todo-lists/${todolistId}`)
  },
  updateTodoTitle(todolistId: string, title: string) {
    return instance.put<CommonResponseType>(`/todo-lists/${todolistId}`, {title})
  }
}