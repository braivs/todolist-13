import {instance} from "./common-instance";
import {CommonResponseType} from "./common-types";

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

type GetTasksResponse = {
  error: string | null
  totalCount: number
  items: TaskType[]
}

export const tasksApi = {
  getTasks(todolistId: string) {
    return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
  },
  createTask(todolistId: string, taskTitle: string) {
    let promise = instance.post<Array<TaskType>>(`/todo-lists/${todolistId}/tasks`, {title: taskTitle})
    return promise
  },
  deleteTask(todolistId: string, taskId: string) {
    return instance.delete<CommonResponseType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
  },
  updateTask(todolistId: string, taskId: string, data: TaskDataType) {
    return instance.put<CommonResponseType<{item: TaskType}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, data)
  }
}