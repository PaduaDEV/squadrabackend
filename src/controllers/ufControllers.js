// controllers/UFController.js
const UF = require('../models/UF');

// Cria uma nova UF
async function criarUF(req, res) {
  try {
    const { nome, sigla } = req.body;

    const ufCriada = await UF.criarUF(nome, sigla);

    if (ufCriada) {
      res.status(201).json({ message: 'UF criada com sucesso' });
    } else {
      res.status(500).json({ error: 'Erro ao criar UF' });
    }
  } catch (err) {
    console.error('Erro ao criar UF:', err);
    res.status(500).json({ error: 'Erro ao criar UF' });
  }
}

// Obtém uma UF pelo ID
async function obterUF(req, res) {
  try {
    const { id } = req.params;

    const uf = await UF.obterUF(id);

    if (uf) {
      res.json({ uf });
    } else {
      res.status(404).json({ error: 'UF não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao obter UF:', err);
    res.status(500).json({ error: 'Erro ao obter UF' });
  }
}

// Atualiza uma UF
async function atualizarUF(req, res) {
  try {
    const { id } = req.params;
    const { nome, sigla } = req.body;

    const ufAtualizada = await UF.atualizarUF(id, nome, sigla);

    if (ufAtualizada) {
      res.json({ message: 'UF atualizada com sucesso' });
    } else {
      res.status(404).json({ error: 'UF não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao atualizar UF:', err);
    res.status(500).json({ error: 'Erro ao atualizar UF' });
  }
}

// Exclui uma UF
async function excluirUF(req, res) {
  try {
    const { id } = req.params;

    const ufExcluida = await UF.excluirUF(id);

    if (ufExcluida) {
      res.json({ message: 'UF excluída com sucesso' });
    } else {
      res.status(404).json({ error: 'UF não encontrada' });
    }
  } catch (err) {
    console.error('Erro ao excluir UF:', err);
    res.status(500).json({ error: 'Erro ao excluir UF' });
  }
}

// Outras funções do controlador relacionadas a UF...

module.exports = {
  criarUF,
  obterUF,
  atualizarUF,
  excluirUF,
  // Outras funções do controlador relacionadas a UF...
};
