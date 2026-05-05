import express from 'express';
import {register, login } from '../controllers/authentication.js';
import authMiddleware from '../middleware/auth.js';
import protect from '../middleware/auth.js';

const authRouter = express.Router();

authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.get('/user', authMiddleware, (req, res) => {    
    res.status(200).json({ message: 'Authenticated user', user: req.user });
});
export default authRouter;