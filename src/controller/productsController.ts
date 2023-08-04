import { Request, Response } from "express";
import database from "../config/database";

async function getProducts(req: Request, res: Response) {
    database.connection.query('SELECT * FROM products;', (err, results) => {

        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                mensage: 'Listagem de produtos realizada com sucesso.',
                data: results
            })
        };
    })
};

async function postProduct(req: Request, res: Response) {
    const querySql = 'INSERT INTO products(DS_NAME, DS_DSCRIPTION, NS_VALUE, DS_BRAND, DS_STATUS) VALUES (?, ?, ?, ?, ?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.DS_DSCRIPTION,
        req.body.NS_VALUE,
        req.body.DS_BRAND,
        req.body.DS_STATUS
    );

    database.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            mensagem: 'Produto cadastrado com sucesso :>',
            data: results
        })
    })
};

async function putProducts(req: Request, res: Response) {

    const productsId = req.params.id; 

    const querySql = 'UPDATE products SET DS_NAME = ?, DS_DSCRIPTION = ?, NS_VALUE = ?, DS_BRAND = ?, FL_STATUS = ? WHERE ID_CLIENT = ?;';
    const params = Array(
        req.body.DS_NAME,
        req.body.DS_DSCRIPTION,
        req.body.NS_VALUE,
        req.body.DS_BRAND,
        req.body.DS_STATUS,
        productsId
    );

    database.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            mensage: 'Alterações realizadas com sucesso!',
            data: results
        })
    })
};

async function deleteProducts(req: Request, res: Response) {
    //recupera o id enviado por parametro
    const userId = req.params.id;

    const querySql = 'DELETE FROM clients_ecomerce WHERE ID_CLIENT = ?';

    database.connection.query(querySql, [userId], (err, results) => {
        res.json({
            mensage: 'Cliente deletado com sucesso!',
        })
    })
};


export default {
    getProducts,
    postProduct,
    putProducts
};