const express = require('express');
const routes = express.Router();

const TarefaController = require('./controllers/TarefaController');

routes.get('/tarefas', TarefaController.index);//buscando informações
routes.get('/tarefas/:title', TarefaController.show);
routes.post('/tarefas', TarefaController.store); //criando novos registros
routes.put('/tarefas/:id', TarefaController.update); //atualizando informações
routes.delete('/tarefas/:id', TarefaController.destroy);//deletando informações

module.exports = routes;