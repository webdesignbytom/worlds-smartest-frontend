import { Router } from 'express';
import { createNewCourse, getAllCourses, getCurrentCourse } from '../controllers/courses.js';

const router = Router();

router.get('/all-courses', getAllCourses);
router.get('/current-course', getCurrentCourse);
router.post('/create-course', createNewCourse);

export default router;
