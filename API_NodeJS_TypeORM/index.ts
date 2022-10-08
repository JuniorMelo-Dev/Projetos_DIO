import express, { Request, Response } from 'express';

const server = express();

server.get('/', (request: Request, response: Response) => {
    return response.json({message: 'Criando método GET'})
})

server.listen(5000, () => {
    console.log('Servidor rodando OK na porta:5000 link: http://localhost:5000/')
})

