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

export async function updateTask(req, res) {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body)
        res.status(StatusCodes.OK).json(task)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Error in updating task" })
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

export async function findOneById(req, res) {
    try {
        const response = await Task.findById({ _id: req.params.id })
        res.status(StatusCodes.OK).json(response)
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: "Something went wrong in find by Id" })
    }
}