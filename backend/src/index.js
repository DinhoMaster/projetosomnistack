/** 
* Rota / Recursos
*/
/*
* Métodos HTTP:
* GET: Buscar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: alterar uma informação no back-end
* DELETE: Deletar uma informação no back-end
*/
/**
 * O request guarda todos os dados dados quem através da requisição do usuário
 * O response é o responsável por retornar uma resposta para o usuário
 */
/**
 * Tipos de parâmetros:
 * Query Params: Parâmteros nomeados enviados na rota após "?" (Filtros , paginação) (acesso: Query)
 * Route Params: Parâmetros utilizados para identificar recursos (acesso: params)
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */
 /**
  * Sql: MySQL, SQlite, PostgreSQL, Oracle, Microsoft SQL SErver
  * NOSQL: MongoDB, CouchDB, etc...
  */
/**
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

//app.use(cors({
  //origin: 'http://meuapp.com'
//});
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);
