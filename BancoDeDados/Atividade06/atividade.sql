-- Criação do banco de dados ESCOLA
CREATE DATABASE ESCOLA;
USE ESCOLA;

-- Criação da tabela ALUNO
CREATE TABLE ALUNO (
    ID INT PRIMARY KEY,
    Nome VARCHAR(100),
    Matricula INT,
    Email VARCHAR(100),
    Endereco VARCHAR(150),
    Telefone VARCHAR(20)
);

-- Inserção de dados na tabela ALUNO
INSERT INTO ALUNO (ID, Nome, Matricula, Email, Endereco, Telefone)
VALUES 
(1, 'João Carlos', 1234, 'Jcarlos@gmail.com', 'Rua 13 de maio', '(11)7825-4489'),
(2, 'José Vítor', 2345, 'Jvitor@gmail.com', 'Rua da Saudade', '(11)7825-6589'),
(3, 'Paulo André', 3456, 'Pandr@gmail.com', 'Rua do Sol', '(11)7825-4495');
