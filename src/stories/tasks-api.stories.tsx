import React, {useEffect, useState} from "react";
import {tasksApi} from "../api/tasks-api";

export default {
  title: 'API/Tasks'
}

export const GetTasks = () => {

  const [state, setState] = useState<any>(null)

  useEffect(() => {
    const todolistId = 'f0e09a24-5478-43c8-941b-8ea0c9c0b9c8'
    tasksApi.getTasks(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])
  return <div> {JSON.stringify(state)}</div>
}

export const CreateTask = () => {
  const [state, setState] = useState<any>(null)
  const todolistId = 'f0e09a24-5478-43c8-941b-8ea0c9c0b9c8'
  const taskTitle = 'Briws Todo'
  useEffect(() => {
    tasksApi.createTask(todolistId, taskTitle)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = 'f0e09a24-5478-43c8-941b-8ea0c9c0b9c8';
    const taskId = 'd28d16bb-17fd-44d3-9435-f441e6bc5ec8'
    tasksApi.deleteTask(todolistId, taskId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = 'f0e09a24-5478-43c8-941b-8ea0c9c0b9c8';
    const taskId = 'df7a4ba9-b026-4e9d-9c28-5d4b8b3b24d3';
    const data = {
      title: 'updated task',
      description: 'new description',
      completed: true,
      status: 1,
      priority: 5,
      startDate: '2021-08-19T13:12:11.577',
      deadline: '2021-08-19T13:12:11.577'
    }
    tasksApi.updateTask(todolistId, taskId, data)
      .then((res) => {
        setState(res.data)
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
