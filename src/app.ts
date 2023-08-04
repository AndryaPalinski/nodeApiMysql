const express = require('express');
const app = express();

app.use(express.json());

import userController from './controller/userController';
import productsController from './controller/productsController';
//Faz a importação do Router para o app. 
import userRouter from './routers/userRouters'; 
import productsRouter from './routers/productsRouters'; 

//Mostra para o app o que ele deve passar para o server. 
app.use('/api/', userRouter);
app.use('/api/', productsRouter);


export default app; 