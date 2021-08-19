import React, {useEffect, useState} from 'react'
import axios from 'axios';
import {todolistApi} from "../api/todolist-api";

export default {
  title: 'API'
}



export const GetTodolists = () => {

  const [state, setState] = useState<any>(null)

  useEffect(() => {
    todolistApi.getTodolists()
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>

}
export const CreateTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    todolistApi.createTodo('HOHOHO!')
    .then((res) => {
      setState(res.data);
    })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = '14019b7e-8cdc-4693-8c5a-574e2c0789ae';
    todolistApi.deleteTodo(todolistId)
      .then((res) => {
        setState(res.data);
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
  const [state, setState] = useState<any>(null)
  useEffect(() => {
    const todolistId = 'd00247b5-91eb-4abf-8c71-06043865fb88'
    const title = 'HELLLO!!'
    todolistApi.updateTodoTitle(todolistId, title)
      .then((res) => {
        setState(res.data)
      })

  }, [])

  return <div> {JSON.stringify(state)}</div>
}

