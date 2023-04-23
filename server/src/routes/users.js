import { Router } from 'express';
import { getAllUsers, getUserByEmail, getUserById } from '../controllers/users.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.get('/user/id/:id', getUserById);
router.get('/user/email/:email', getUserByEmail);

export default router;
