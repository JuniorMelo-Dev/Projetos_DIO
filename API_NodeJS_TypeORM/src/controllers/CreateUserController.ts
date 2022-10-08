import { Request, Response } from 'express';

class CreateUserController {
    handle(request:Request, response: Response) {
        return response.json([
            {
                name: 'Junior'
            },
            {
                name: 'Luana'
            },
            {
                name: 'Bernardo'
            },
            {
                name: 'Helena'
            }
        ])
    }
}

export { CreateUserController }