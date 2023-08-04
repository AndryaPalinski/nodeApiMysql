import userController from "../controller/userController";

const express = require('express'); 
const router = express.Router(); 

//Listar usuários. 
router.get('/users', userController.getUsers );

//Cadastrar usuários.
router.post('/users', userController.postUser);

router.put('/user/:id', userController.putUser);

router.delete('/user/:id', userController.deletUser);

export default router;