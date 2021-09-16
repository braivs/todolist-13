import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

const arr: Array<number> = [1, 2, 3]

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos()
            .then((res) => {
                let todos = res.data
                setState(todos)
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
    // return <div>{state}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.createTodo()
            .then((res) => {
                setState(res.data);
            })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todolistId = '4f8b1bf3-4652-4017-94a9-4b3588697155';
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
        const todolistId = '55a8b261-9fe3-410f-ac9d-68bb24f3be40'
        const title = 'BRIWS'
        todolistApi.updateTodoTitle(todolistId, title)
        .then((res) => {
            setState(res.data)
        })
    }, [])


    return <div> {JSON.stringify(state)}</div>
}

