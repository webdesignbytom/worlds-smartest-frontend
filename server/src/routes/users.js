import { Router } from 'express';
import { getAllUsers, getUserByEmail, getUserById, registerNewUser } from '../controllers/users.js';

const router = Router();

router.get('/all-users', getAllUsers);
router.get('/user/id/:id', getUserById);
router.get('/user/email/:email', getUserByEmail);
router.post('/register', registerNewUser)

export default router;
