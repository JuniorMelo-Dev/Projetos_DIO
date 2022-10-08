import express from 'express';
import { router } from './routes';

const server = express();

server.use(router)

server.listen(5000, () => {
    console.log('Servidor rodando OK na porta:5000 link: http://localhost:5000/users')
})