import { Router } from 'express';
import { getAllSemesters, getCurrentSemester, getSemesterById, getYearlySemesters } from '../controllers/semesters.js';

const router = Router();

router.get('/all-semesters', getAllSemesters);
router.get('/semester/:id', getSemesterById);
router.get('/full-course-semesters/:id', getYearlySemesters);
router.get('/current-semester', getCurrentSemester);
// router.post('/create-semester', createNewCourse);

export default router;
