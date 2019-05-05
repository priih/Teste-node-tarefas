const mongoose = require('mongoose');

const Tarefa = mongoose.model('Tarefa');

module.exports = {
  async index(req, res) { //listagem
    const tarefas = await Tarefa.find().sort("-createdAt");

    return res.json(tarefas);
  },

  async show(req, res) {
    const tarefa = await Tarefa.find({title:req.params.title});

    return res.json(tarefa);
  },

  async store(req, res) { //salvar no banco de daos, criar
    const tarefa = await Tarefa.create(req.body);
    
    return res.json(tarefa);
  },

  async update(req, res) {
    const tarefa = await Tarefa.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(tarefa);
  },

  async destroy(req, res) {
    await Tarefa.findByIdAndRemove(req.params.id);

    return res.send();
  }
};