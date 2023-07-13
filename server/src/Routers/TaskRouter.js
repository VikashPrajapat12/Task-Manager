import express from 'express';
import { deleteTask, fetchAllTasks, fetchCompletedTasks, fetchPendingTasks, findOneById, markAsCompleted, saveTask, updateTask } from '../Controllers/TaskController.js';

const TaskRouter = express.Router()

TaskRouter.post('/tasks', saveTask)
TaskRouter.get('/tasks/all', fetchAllTasks)
TaskRouter.get('/tasks/completed', fetchCompletedTasks)
TaskRouter.get("/:id", findOneById)
TaskRouter.get("/tasks/pending", fetchPendingTasks)
TaskRouter.put("/tasks/mark-complete/:id", markAsCompleted)
TaskRouter.put("/tasks/:id", updateTask)
TaskRouter.delete('/tasks/:id', deleteTask)

export default TaskRouter;