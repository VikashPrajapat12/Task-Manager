import StatusCodes from "http-status-codes";
import { Task } from "../Models/TaskModel.js";

export async function saveTask(req, res) {
    try {
        req.body['createdOn'] = new Date()
        req.body['deadline'] = new Date(req.body.deadline)
        const task = new Task(req.body)
        const saveTask = await task.save()
        res.status(StatusCodes.OK).json(saveTask)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error creating task" })

    }
}

export async function fetchAllTasks(req, res) {
    try {
        const task = await Task.find()
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in fetching task" })
    }
}

export async function fetchCompletedTasks(req, res) {
    try {
        const tasks = await Task.find({ isCompleted: true })
        res.status(StatusCodes.OK).json(tasks)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in fetching task" })
    }
}

export async function deleteTask(req, res) {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        res.status(StatusCodes.NO_CONTENT).json()
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in deleting task" })
    }
}

export async function fetchPendingTasks(req, res) {
    try {
        const task = await Task.find({ isCompleted: false })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in getting pending task " })
    }
}

export async function markAsCompleted(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, { isCompleted: true })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in updating task" })
    }
}


export async function UpdateTaskById(req, res) {
    try {
        const task = await Task.find({ _id: req.params.id })
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in fetching task" })
    }
}

export async function updateOneTask(req, res) {
    const editTask = new Task(req.body)
    try {
        const task = await Task.updateOne({ _id: req.params.id }, editTask)
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in updating task" })
    }
}