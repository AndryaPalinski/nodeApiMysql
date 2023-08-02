# /*CRIAR DATA BASE*/
create database ecomerce;
# /*MARCAR COMO 'PRINCIPAL'*/
use ecomerce;

##  /*------------------CRIAÇÃO--DE--TABELAS-------------------------------*/
###  create table clients_ecomerce(
ID_CLIENT INT NOT NULL AUTO_INCREMENT,
    DS_NAME VARCHAR(255) NOT NULL,
    NM_CPF INT,
    FL_STATUS ENUM('A', 'I') DEFAULT 'A',
        DT_CREATED DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID_CLIENT)
); /*<-- Tabela de clients*/

### create table products(
ID_PRODUCT INT NOT NULL AUTO_INCREMENT,
    DS_NAME VARCHAR(120) NOT NULL,
    DS_DSCRIPTION VARCHAR(255) NOT NULL,
    NS_VALUE FLOAT NOT NULL,
    DS_BRAND VARCHAR(120),
    DS_STATUS ENUM('A', 'I') DEFAULT 'A',
    DT_CREATED DATETIME DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (ID_PRODUCT)
);/*<-- Tabela de produtos*/

### create table carts(
ID_CART INT NOT NULL AUTO_INCREMENT,
ID_CLIENT INT,
ID_PRODUCT INT,    
PRIMARY KEY (ID_CART),
FOREIGN KEY(ID_CLIENT) REFERENCES clients_ecomerce(ID_CLIENT),
FOREIGN KEY(ID_PRODUCT) REFERENCES PRODUCTS(ID_PRODUCT)
);/*<-- Tabela do carrinho (com a junção/conexão das duas primeiras tabelas)*/

SELECT * FROM clients_ecomerce;
SELECT * FROM products;
SELECT * FROM carts;

## /*------------------Cadrastros------------------------------*/

## /*Inserir dados na tabela (CAMPOS A MAIS +ERRO+)*/
INSERT INTO clients_ecomerce(DS_NAME, NM_CPF, FL_STATUS) 
VALUES('Alan Rodrigues', 432678904, 'A'); 

INSERT INTO products(DS_NAME, DS_DSCRIPTION,NS_VALUE, DS_BRAND, DS_STATUS) 
VALUES('Violão','Instrumento de corda', 212.90, 'Canção Boa', 'A');

INSERT INTO carts(ID_CLIENT, ID_PRODUCT) 
VALUES(1, 1);