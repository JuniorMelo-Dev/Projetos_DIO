import 'reflect-metadata';
import express from 'express';
import { router } from './routes';
import createConnection from './database'

createConnection();
const server = express();

server.use(express.json())
server.use(router)

server.listen(5000, () => {
    console.log('Servidor rodando OK na porta:5000 link: http://localhost:5000/users')
})