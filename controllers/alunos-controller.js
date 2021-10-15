//Chama o model Alunos no arquivo de model alunos-model
const Alunos = require('../models/alunos-model');

exports.listar_alunos = (req, res) => {
    let alunos = Alunos.find({}, (err, aluno) => {
        if (err)
            return res.status(500).send("Erro ao consultar aluno");

        res.render("views/pages/alunos", { alunos: aluno });
    });
};

exports.cadastrar_aluno = (req, res) => {
    let alunos = Alunos.find({}, (err, alunos) => {
        if (err)
            return res.status(500).send("Erro ao consultar Aluno");
        return res.render("views/pages/alunos", { alunos: alunos });
    });
    res.render("views/pages/cadastro");
};

exports.cadastrar_aluno_p = (req, res) => {
    let aluno = new Alunos(); //criando um objeto do tipo Alunos
    aluno.nome = req.body.nome;
    aluno.idade = req.body.idade;
    aluno.turma = req.body.turma;
    aluno.nota = req.body.nota;

    aluno.save((err) => {
        if (err)
            return res.status(500).send("Erro ao cadastrar aluno");
        return res.redirect("/alunos");
    });
};

exports.deletar_aluno = (req, res) => {
    var id = req.params.id;

    Alunos.deleteOne({ _id: id }, (err, result) => {
        if (err)
            return res.status(500).send("Erro ao excluir aluno");
    })
    res.redirect("/alunos");
};

exports.editar_aluno = (req, res) => {
    var id = req.params.id;
    Alunos.findById(id, (err, aluno) => {
        if (err)
            return res.status(500).send("Erro ao consultar aluno");
        res.render("views/pages/editar-aluno", { alunos: aluno });
    });
};

exports.editar_aluno_p = (req, res) => {
    var id = req.body.id;
    Alunos.findById(id, (err, aluno) => {
        if (err)
            return res.status(500).send("Erro ao editar aluno");
        aluno.nome = req.body.nome;
        aluno.idade = req.body.idade;
        aluno.turma = req.body.turma;
        aluno.nota = req.body.nota;

        aluno.save(err => {
            if (err)
                return res.status(500).send("Erro ao editar aluno");
            return res.redirect("/alunos");
        });
    });
};