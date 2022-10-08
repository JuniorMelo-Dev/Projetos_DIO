import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {

        const name = request.body.name

        return response.json({message: `Teste de método POST criando usuário ${name}`})
    }
}

export { CreateUserController }