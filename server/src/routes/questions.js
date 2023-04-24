import { Router } from 'express';
import { createNewQuestion, getAllQuestions } from '../controllers/questions.js';

const router = Router();

router.get('/all-questions', getAllQuestions);
router.post('/create-question', createNewQuestion);

export default router;
