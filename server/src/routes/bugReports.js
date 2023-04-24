import { Router } from 'express';
import { createNewBugReport, getAllBugReports } from '../controllers/bugReports.js';

const router = Router();

router.get('/all-bug-reports', getAllBugReports);
router.post('/create-bug-report', createNewBugReport)


export default router;
