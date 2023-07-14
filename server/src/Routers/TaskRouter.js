import express from 'express';
import { UpdateTaskById, deleteTask, fetchAllTasks, fetchCompletedTasks, fetchPendingTasks, markAsCompleted, saveTask, updateOneTask } from '../Controllers/TaskController.js';

const TaskRouter = express.Router()

TaskRouter.post('/tasks', saveTask)
TaskRouter.get('/tasks/all', fetchAllTasks)
TaskRouter.get('/tasks/completed', fetchCompletedTasks)
TaskRouter.get("/tasks/pending", fetchPendingTasks)
TaskRouter.put("/tasks/mark-complete/:id", markAsCompleted)
TaskRouter.get("/:id", UpdateTaskById)
TaskRouter.put("/tasks/:id", updateOneTask)
TaskRouter.delete('/tasks/:id', deleteTask)

export default TaskRouter;