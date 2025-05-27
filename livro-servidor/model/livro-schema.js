const banco = require('./conexao');

const livroSchema = new banco.Schema({
  titulo: String,
  codEditora: Number,
  resumo: String,
  autores: [String]
});

const Livro = banco.model('livro', livroSchema, 'livros');

module.exports = Livro;