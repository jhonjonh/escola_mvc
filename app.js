//cria a var express e depois a const app usando express. Define porta.
var express = require("express");
const app = express();
const port = 3000;  

//configura mecanismo de visualização (view engine) usando ejs.
app.set("view engine", "ejs");
app.set("views", __dirname, "/views");

//permite fluxo de dados entre as paginas do projeto em formato json
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Linka ao alunos-router e usa os parametros dele como roteador
var router = require("./routers/alunos-router"); 
app.use("/", router); 

//Faz conexão mongoose com o MongoDB
var mongoose = require("mongoose"); 
mongoose.connect("mongodb+srv://john_gerber:john_gerber@cluster0.a6npf.mongodb.net/escola?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("Banco de dados conectado!");
}).catch((err) => {
    console.log("Falha na conexao ao banco de dados: " + err);
});

//Criando rota para a página inicial:
app.get("/", (req, res) => {
    res.render("views/pages/index");
});

//Criando conexão com o servidor
app.listen(port, () => { 
    console.log("Servidor rodando na porta " + port);
});
