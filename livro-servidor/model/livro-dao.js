const Livro = require('./livro-schema');

const obterLivros = async () => {
  return await Livro.find();
};

const incluirLivro = async (livro = {}) => {
  return await Livro.create(livro);
};

const excluirLivro = async (codigo) => {
  return await Livro.deleteOne({_id: codigo});
};

module.exports = {obterLivros, incluirLivro, excluirLivro};