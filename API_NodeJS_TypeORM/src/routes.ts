import { Router, Request, Response } from 'express';
import { CreateUserController } from './controllers/CreateUserController';

const router = Router();
const createUserController = new CreateUserController();

router.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Criando método GET'})
})

router.post('/users', createUserController.handle)

export { router }