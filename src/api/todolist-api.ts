import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
  }
})


/*
function f1() {
  return 1 + 2
}
function f2() {
  return 3 + 4
}
function f3() {
  return 5 + 6
}
*/

function f(a: number, b: number) {
  return a + b
}

type CommonResponseType<T = {}> = {
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
  data: T
}

/*type CreateTodolistResponseType = {
  data: {item: TodoType}
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
}*/

/*type DeleteUpdateTodoResponseType = {
  data: {}
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
}*/

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