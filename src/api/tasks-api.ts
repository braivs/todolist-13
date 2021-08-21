import axios from "axios";

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.1',
  withCredentials: true,
  headers: {
    'API-KEY': '06e9c310-f07c-441a-811c-ffc5ac00e636'
  }
})

type TaskType = {
  addedDate: string
  deadline: string
  description: string
  id: string
  order: number
  priority: number
  startDate: string
  status: number
  title: string
  todoListId: string
}

type TaskDataType = {
  title: string
  description: string
  status: number
  priority: number
  startDate: string
  deadline: string
}

type CommonResponseTaskType<T = {}> = {
  data: T
  fieldsErrors: Array<string>
  messages: Array<string>
  resultCode: number
}

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<Array<TaskType>>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, taskTitle: string) {
    let promise = instance.post<Array<TaskType>>(`/todo-lists/${todolistId}/tasks`, {title: taskTitle})
    return promise
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete<CommonResponseTaskType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(todolistId: string, taskId: string, data: TaskDataType) {
    return instance.put<CommonResponseTaskType<{item: TaskType}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, data)
  }
}