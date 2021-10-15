//chama módulo mongoose
const mongoose = require('mongoose');

//declara (modela) o tipo dos atributos da collection produtos, se é string, number, boolean, etc. (nome da collection tem que ser minusculo e plural)
const Alunos = mongoose.model("alunos", {
    nome: String,
    idade: Number,
    turma: String,
    nota: Number
});

//exporta o modelo Alunos para ser usado por outros arquivos
module.exports = Alunos;