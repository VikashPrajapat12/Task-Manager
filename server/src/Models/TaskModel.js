import mongoose from "mongoose";
const TaskSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    createdOn: { type: Date, required: true, },
    deadline: { type: Date, required: true },
    completedOn: { type: Date },
    isCompleted: { type: Boolean, required: true, default: false }
})

export const Task = mongoose.model('task', TaskSchema)