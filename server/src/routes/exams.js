import { Router } from 'express';
import { getAllExams } from '../controllers/exams.js';
import {
  validateAuthentication,
  validateAdminRole,
  validateDeveloperRole,
} from '../middleware/auth.js';

const router = Router();

router.get('/all-exams', getAllExams);

export default router;