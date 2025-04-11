const Livro = require('.livro-schema');
const banco = require('./conexao');

const obterLivros = async () => {
  return await Livro.find();
};

const incluirLivro = async (livro = {}) => {
  return await Livro.create(livro);
};

const excluirLivro = async (codigo) => {
  return await Livro.deleteOne({_id: new banco.ObjectId(codigo)});
};

module.exports = {obterLivros, incluirLivro, excluirLivro};