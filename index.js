const express = require('express');
const bodyParser =require('body-parser');

const app = express();

const port = 3000;

app.use(bodyParser.json());


app.get('/hello', function (req, res) {
  res.send('Hello World');
});

const mensagens = [
  "Essa é a primeira mensagem",
  "Essa é a segunda mensagem"
];
//[GET] /mensagens - Retorna a lista de mensagens
app.get('/mensagens', function (req, res) {
  res.send(mensagens.filter(Boolean));
});

//[GET] /mensagens/{id} - Retorna uma unica mensagem pelo ID
app.get('/mensagens/:id', function (req, res) {
  const id = req.params.id;
  const mensagem = mensagens[id];

  res.send(mensagem);
});
//[POST] /mensagens - Cria uma nova mensagem
app.post('/mensagens', function (req, res){
  const mensagem = req.body.mensagem;
  mensagens.push(mensagem);
  
  res.send(`mensagem criada com sucesso: '${mensagem}'`);
})
//[PUT] /mensagens/{id} - Atualiza uma mensagem pelo ID
app.put('/mensagens/:id', function (req, res) {
  const id = req.params.id;
  const mensagem = req.body.mensagem;

  mensagens[id] = mensagem;

  res.send(`Mensagem atualizada com sucesso: '${mensagem}.'`);
});
//[DELETE] /mensagens/{id} - Remover uma mensagem pelo ID
app.delete('/mensagens/:id', function(req, res){
  const id = req.params.id;

  delete mensagens[id];
})

app.listen(port, function() {
    console.info(`Servidor Rodando em http://localhost:${port}`);
});