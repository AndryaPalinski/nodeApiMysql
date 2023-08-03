import userController from "../controller/userController";

const express = require('express'); 
const router = express.Router(); 

//Listar usuários. 
router.get('/clients', userController.getUsers );

//Cadastrar usuários.
//router.post('/users', userController.postUser);

export default router;