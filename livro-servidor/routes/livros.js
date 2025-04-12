const { obterLivros, incluirLivro, excluirLivro } = require('../model/livro-dao');
var express = require('express');
var router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const livros = await obterLivros();

    if(!livros) {
      return res.status(404).json({erro: 'Não Foi Captado Nenhum Livro'});
    }
    res.json(livros);
  } catch(err) {
    res.status(500).json({ erro: 'Erro à obter os livros', err });
  }

});

router.post('/', async (req, res, next) => {
  try {
    const livro = req.body;
    let resultado = await incluirLivro(livro);

    if(!resultado) {
      return res.status(400).json({ message: 'Erro ao Adicionar o Livro' });
    }
    res.status(201).json({ message: 'Livro Adicionado com Sucesso' });
  } catch(err) {
    res.status(500).json({ message: 'Erro ao Adicionar o Livro', err });
  }

});

router.delete('/:codigo', async (req, res, next) => {
  try {
    const codigo = req.params.codigo;
    let resultado = await excluirLivro(codigo);

    if(resultado.deletedCount === 0) {
      return res.status(404).json({ message: 'Livro Não Encontrado' });
    }

    res.status(204).json({ message: 'Livro Excluido com Sucesso' });
  } catch(err) {
    res.status(500).json({ message: 'Houve uma Falha ao Excluir o Livro', err });
  }

});

module.exports = router;