import { Router } from 'express';
import { getAllUsers } from '../controllers/users.js';
import { validateAuthentication, validateAdminRole } from '../middleware/auth.js';

const router = Router();

router.get('/all-users', getAllUsers);
// router.get('/user/id/:id', getUserById);
// router.get('/user/email/:email', getUserByEmail);

export default router;
