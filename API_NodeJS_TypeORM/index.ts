import express, { request, Request, Response } from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Criando método GET'})
})

server.get('/users', (request:Request, response: Response) => {
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
})

server.listen(5000, () => {
    console.log('Servidor rodando OK na porta:5000 link: http://localhost:5000/users')
})

