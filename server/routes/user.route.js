import express from 'express';
const userRouter = express.Router();

import UserController from '../controllers/user.controller.js';

userRouter.get('/:userId', UserController.getById);
userRouter.post('/create', UserController.create);
userRouter.post('/:userId/update', UserController.update);
userRouter.post('/authenticate', UserController.authenticate);

export default userRouter;
