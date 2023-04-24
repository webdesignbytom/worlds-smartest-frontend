import { Router } from 'express';
import { getAllExams } from '../controllers/exams.js';

const router = Router();

router.get('/all-exams', getAllExams);

export default router;
