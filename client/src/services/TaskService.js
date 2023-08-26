import axios from "axios";
import { BASE_URL, TASK_URL_PREFIX } from "../constants/ApiConstants";
import { message } from "antd";

export function saveTask(task) {
    return axios.post(TASK_URL_PREFIX, task)
}

export function getTaskFromServer(url) {
    return axios.get(`${TASK_URL_PREFIX}/${url}`)
}

export function deleteTask(id) {
    message.success("Task deleted successfully")
    return axios.delete(`${TASK_URL_PREFIX}/${id}`)
}

export function markAsCompleted(id) {
    return axios.put(`${TASK_URL_PREFIX}/mark-complete/${id}`)
}

export function updateTaskData(Task, id) {
    return axios.put(`${TASK_URL_PREFIX}/${id}`, Task)
}

export function updateTask(id) {
    return axios.get(`${BASE_URL}/${id}`)
}