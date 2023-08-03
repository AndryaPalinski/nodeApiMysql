const express = require('express');
const app = express();

app.use(express.json());

//Faz a importação do Router para o app. 
import userRouter from './routers/userRouters'; 
//Mostra para o app o que ele deve passar para o server. 
app.use('/api/', userRouter);


export default app; 