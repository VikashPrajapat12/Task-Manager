import express from 'express'
import 'dotenv/config';
import TaskRouter from './src/Routers/TaskRouter.js';
import { Dbconfig } from './src/Configs/Dbconfigs.js';
import colors from 'colors'
import cors from 'cors';

const app = express()
app.use(express.json())
app.use(cors())
app.use(TaskRouter)
Dbconfig()
app.listen(process.env.PORT, () => {
    console.log(`Server is listening on port ${process.env.PORT}`.blue);
})