// Importa o pacote express
//const express = require('express');
// App Express
//const app = express();

import app from './app'

//Importar o dotenv para fazer a ligação dos arquivos (portas)
import dotenv from "dotenv";
dotenv.config();

// Endpoint raiz
app.get('/', (request: any, response: any) => {
    response.send('Eita q tá funcionando')
});

//Criar PORTA no arquivo .env
const PORT = process.env.PORT;

// Inicia o sevidor
app.listen(PORT, () =>
    console.log(`Tá funcionando na porta ${PORT} <-- :D`));

 