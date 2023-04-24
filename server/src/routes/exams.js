import { Router } from 'express';
import { createNewExam, getAllCourseExams, getAllExams } from '../controllers/exams.js';

const router = Router();

router.get('/all-exams', getAllExams);
router.get('/course-exams', getAllCourseExams);
router.post('/create-exam', createNewExam)

export default router;
