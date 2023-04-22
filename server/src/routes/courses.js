import { Router } from 'express';
import { getAllCourses, getCurrentCourse } from '../controllers/courses.js';
import { getCurrentSemester } from '../controllers/semesters.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-courses', getAllCourses);
router.get('/current-course', getCurrentCourse);
router.get('/current-course/:currentSemester', getCurrentSemester);
// router.get('/current-course/:currentSemester/exams', getAllActiveExams);

export default router;
