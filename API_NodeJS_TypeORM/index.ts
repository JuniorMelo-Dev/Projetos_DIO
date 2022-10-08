import express from 'express';

const server = express();

server.listen(5000, () => {
    console.log('Servidor rodando OK na porta:5000')
})

