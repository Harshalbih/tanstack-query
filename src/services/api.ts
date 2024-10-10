import axios from "axios"
import { Todo } from "../types/todo"

const BASE_URL = 'https://dummyjson.com/todos'
const axiosInstance = axios.create({baseURL: BASE_URL})

export const getTodosIds = async ()=>{
    return(await axiosInstance.get<Todo[]>('todos'))
    .data.map((todo)=>todo.id)
}






















