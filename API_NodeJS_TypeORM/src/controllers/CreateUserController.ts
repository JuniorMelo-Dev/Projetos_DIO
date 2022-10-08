import { Request, Response } from 'express';

class CreateUserController {
    handle(request: Request, response: Response) {

        const name = request.body.name

        if(name.length === 0){
            return response.status(400).json({mensagem: 'Informe um nome de usuário'})
        }

        return response.status(201).json({mensagem: `Teste de método POST criando usuário ${name}`})
    }
}

export { CreateUserController }