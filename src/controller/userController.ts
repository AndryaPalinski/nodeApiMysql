import { Request, Response } from "express";
import database from "../config/database";

async function getUsers(req: Request, res: Response) {
    database.connection.query('SELECT * FROM clients_ecomerce', (err, results) => {

        if (err) {
            res.json({
                success: false
            });
        } else {
            res.json({
                success: true,
                mensage: 'Listagem de usuários realizada com sucesso.',
                data: results
            })
        };
    })
};

async function postUser(req: Request, res: Response) {
    const querySql = 'INSERT INTO clients_ecomerce(DS_NAME, NM_CPF, FL_STATUS)VALUES(?,? ,?);';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS
    );

    database.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            mensagem: 'Cadastro realizado com sucesso :>',
            data: results
        })
    })
};

async function putUser(req: Request, res: Response) {

    const userId = req.params.id; 

    const querySql = 'UPDATE clients_ecomerce SET DS_NAME = ?, NM_CPF = ?, FL_STATUS = ? WHERE ID_CLIENT = ?';
    const params = Array(
        req.body.DS_NAME,
        req.body.NM_CPF,
        req.body.FL_STATUS,
        userId
    );

    database.connection.query(querySql, params, (err, results) => {
        res.json({
            success: true,
            mensage: 'Alterações realizado com sucesso!',
            data: results
        })
    })
};

async function deletUser(req: Request, res: Response) {
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
    getUsers,
    postUser,
    putUser,
    deletUser
};