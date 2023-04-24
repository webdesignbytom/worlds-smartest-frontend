import { Router } from 'express';
import { getAllCourses, getCurrentCourse } from '../controllers/courses.js';

const router = Router();

router.get('/all-courses', getAllCourses);
router.get('/current-course', getCurrentCourse);

export default router;
