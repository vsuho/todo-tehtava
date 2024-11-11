import { Router } from 'express';
import { auth } from '../helpers/auth.js';
import {getTasks, postTask, removeTask} from '../controllers/TaskController.js';
import { pool } from '../helpers/db.js';

const router = Router();

router.get('/', getTasks)

router.post('/create', auth, postTask,)

router.delete('/delete/:id', auth, removeTask)

export { router };

