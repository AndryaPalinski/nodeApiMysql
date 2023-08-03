import { Request, Response } from "express";
import database from "../config/database";

async function getUsers(req:Request, res:Response) {
    database.connection.query('SELECT * FROM clients_ecomerce', (err, results) =>{ 
    res.send(results);
    if(err){
        res.json({
            success: false
        });
    } else {
        res.json({
            success: true,
            mensage: 'Listagem de usuários realizada com sucesso.',
            data: results
        })};
    })};

    /*async function postUser(req:Request, res:Response) {
        const querySql ='INSERT INTO clients_ecomerce(DS_NAME, NM_CPF, FL_STATUS)VALUES(?,? ,?);';
        const params = Array(
            req.body.DS_NAME,
            req.body.NM_CPF,
            req.body.FL_STATUS
        );

        database.connection.query( querySql, params, (err, results) =>{ 
            res.json({
                success: true,
                mensagem: 'Cadastro realizado com sucesso :>',
                data: results
            })})};*/

            export default{
                getUsers,
                //postUser
            };