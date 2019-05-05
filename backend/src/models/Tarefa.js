const mongoose = require('mongoose');

const mongoosePaginate = require('mongoose-paginate');

const TarefaSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  dateEvent: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

TarefaSchema.plugin(mongoosePaginate);

mongoose.model('Tarefa', TarefaSchema);