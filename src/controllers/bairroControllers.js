// controllers/BairroController.js
const Bairro = require('../models/Bairro');

async function criarBairro(req, res) {
  try {
    const { nome, cidadeId } = req.body;

    const bairroCriado = await Bairro.criarBairro(nome, cidadeId);

    if (bairroCriado) {
      res.status(201).json({ message: 'Bairro criado com sucesso' });
    } else {
      res.status(500).json({ error: 'Erro ao criar Bairro' });
    }
  } catch (err) {
    console.error('Erro ao criar Bairro:', err);
    res.status(500).json({ error: 'Erro ao criar Bairro' });
  }
}

async function obterBairro(req, res) {
  try {
    const { id } = req.params;

    const bairro = await Bairro.obterBairro(id);

    if (bairro) {
      res.json({ bairro });
    } else {
      res.status(404).json({ error: 'Bairro não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao obter Bairro:', err);
    res.status(500).json({ error: 'Erro ao obter Bairro' });
  }
}

async function atualizarBairro(req, res) {
  try {
    const { id } = req.params;
    const { nome, cidadeId } = req.body;

    const bairroAtualizado = await Bairro.atualizarBairro(id, nome, cidadeId);

    if (bairroAtualizado) {
      res.json({ message: 'Bairro atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Bairro não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao atualizar Bairro:', err);
    res.status(500).json({ error: 'Erro ao atualizar Bairro' });
  }
}

async function excluirBairro(req, res) {
  try {
    const { id } = req.params;

    const bairroExcluido = await Bairro.excluirBairro(id);

    if (bairroExcluido) {
      res.json({ message: 'Bairro excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Bairro não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao excluir Bairro:', err);
    res.status(500).json({ error: 'Erro ao excluir Bairro' });
  }
}

// Outras funções do controlador relacionadas a Bairro...

module.exports = {
  criarBairro,
  obterBairro,
  atualizarBairro,
  excluirBairro,
  // Outras funções do controlador relacionadas a Bairro...
};
