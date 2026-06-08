const express = require('express');
const app = express();
const porta = 3000;

// Diz para o Express servir arquivos estáticos a partir da pasta 'public'
app.use(express.static('public'));

// Inicia o servidor
app.listen(porta, () => {
    console.log(`Servidor rodando! Acesse: http://localhost:${porta}`);
});