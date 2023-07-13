import axios from "axios";
import { TASK_URL_PREFIX } from "../constants/ApiConstants";

export function saveTask(task) {
    return axios.post(TASK_URL_PREFIX, task)
}

export function getTaskFromServer(url) {
    return axios.get(`${TASK_URL_PREFIX}/${url}`)
}

export function deleteTask(id) {
    return axios.delete(`${TASK_URL_PREFIX}/${id}`)
}

export function markAsCompleted(id) {
    return axios.put(`${TASK_URL_PREFIX}/mark-complete/${id}`)
}

export function UpdateTheTask(id, Task) {
    return axios.put(`${TASK_URL_PREFIX}/${id}`, Task)
}

export function findById(id) {
    return axios.get(`${TASK_URL_PREFIX}/${id}`)
}