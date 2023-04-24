import { Router } from 'express';
import { getAllCourseExams, getAllExams } from '../controllers/exams.js';

const router = Router();

router.get('/all-exams', getAllExams);
router.get('/course-exams', getAllCourseExams);

export default router;
