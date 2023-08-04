import poductsController from "../controller/productsController";

const express = require('express'); 
const router = express.Router(); 

//Listar produtos. 
router.get('/products', poductsController.getProducts);

//Cadastrar produtos.
router.post('/product', poductsController.postProduct);

//Edita produtos.
router.put('/product/:id', poductsController.putProducts);

//Deleta produtos.
router.delete('/product/:id', );


export default router;