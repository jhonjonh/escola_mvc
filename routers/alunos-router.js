const express = require('express');
const router = express.Router();

//roteia cada caminho e define os parametros para o controller
const alunosController = require('../controllers/alunos-controller');
router.get('/alunos', alunosController.listar_alunos);
router.get('/cadastro', alunosController.cadastrar_aluno);
router.post('/cadastro', alunosController.cadastrar_aluno_p);
router.get('/deletarAluno/:id', alunosController.deletar_aluno);
router.get('/editarAluno/:id', alunosController.editar_aluno);
router.post('/editarAluno', alunosController.editar_aluno_p);

//exporta o modulo router para ser usado por outros arquivos
module.exports = router;