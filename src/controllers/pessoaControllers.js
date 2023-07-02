// controllers/PessoaController.js
const Pessoa = require('../models/Pessoa');

// Cria uma nova pessoa
async function criarPessoa(req, res) {
  try {
    const { nome, idade, endereco } = req.body;

    const pessoaCriada = await Pessoa.criarPessoa(nome, idade, endereco);

    if (pessoaCriada) {
      res.status(201).json({ message: 'Pessoa criada com sucesso' });
    } else {
      res.status(500).json({ error: 'Erro ao criar pessoa' });
    }
  } catch (err) {
    console.error('Erro ao criar pessoa:', err);
    res.status(500).json({ error: 'Erro ao criar pessoa' });
  }
}

// Obtém uma pessoa pelo ID
async function obterPessoa(req, res) {
  try {
    const { id } = req.params;

    const pessoa = await Pessoa.obterPessoa(id);

    if (pessoa) {
      res.json({ pessoa });
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao obter pessoa:', err);
    res.status(500).json({ error: 'Erro ao obter pessoa' });
  }
}

// Atualiza uma pessoa
async function atualizarPessoa(req, res) {
  try {
    const { id } = req.params;
    const { nome, idade, endereco } = req.body;

    const pessoaAtualizada = await Pessoa.atualizarPessoa(id, nome, idade, endereco);

    if (pessoaAtualizada) {
      res.json({ message: 'Pessoa atualizada com sucesso' });
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao atualizar pessoa:', err);
    res.status(500).json({ error: 'Erro ao atualizar pessoa' });
  }
}

// Exclui uma pessoa
async function excluirPessoa(req, res) {
  try {
    const { id } = req.params;

    const pessoaExcluida = await Pessoa.excluirPessoa(id);

    if (pessoaExcluida) {
      res.json({ message: 'Pessoa excluída com sucesso' });
    } else {
      res.status(404).json({ error: 'Pessoa não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao excluir pessoa:', err);
    res.status(500).json({ error: 'Erro ao excluir pessoa' });
  }
}

// Outras funções do controlador relacionadas a pessoa...

module.exports = {
  criarPessoa,
  obterPessoa,
  atualizarPessoa,
  excluirPessoa,
  // Outras funções do controlador relacionadas a pessoa...
};
