// controllers/MunicipioController.js
const Municipio = require('../models/Municipio');

async function criarMunicipio(req, res) {
  try {
    const { nome, ufId } = req.body;

    const municipioCriado = await Municipio.criarMunicipio(nome, ufId);

    if (municipioCriado) {
      res.status(201).json({ message: 'Município criado com sucesso' });
    } else {
      res.status(500).json({ error: 'Erro ao criar Município' });
    }
  } catch (err) {
    console.error('Erro ao criar Município:', err);
    res.status(500).json({ error: 'Erro ao criar Município' });
  }
}

async function obterMunicipio(req, res) {
  try {
    const { id } = req.params;

    const municipio = await Municipio.obterMunicipio(id);

    if (municipio) {
      res.json({ municipio });
    } else {
      res.status(404).json({ error: 'Município não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao obter Município:', err);
    res.status(500).json({ error: 'Erro ao obter Município' });
  }
}

async function atualizarMunicipio(req, res) {
  try {
    const { id } = req.params;
    const { nome, ufId } = req.body;

    const municipioAtualizado = await Municipio.atualizarMunicipio(id, nome, ufId);

    if (municipioAtualizado) {
      res.json({ message: 'Município atualizado com sucesso' });
    } else {
      res.status(404).json({ error: 'Município não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao atualizar Município:', err);
    res.status(500).json({ error: 'Erro ao atualizar Município' });
  }
}

async function excluirMunicipio(req, res) {
  try {
    const { id } = req.params;

    const municipioExcluido = await Municipio.excluirMunicipio(id);

    if (municipioExcluido) {
      res.json({ message: 'Município excluído com sucesso' });
    } else {
      res.status(404).json({ error: 'Município não encontrado' });
    }
  } catch (err) {
    console.error('Erro ao excluir Município:', err);
    res.status(500).json({ error: 'Erro ao excluir Município' });
  }
}

// Outras funções do controlador relacionadas a Município...

module.exports = {
  criarMunicipio,
  obterMunicipio,
  atualizarMunicipio,
  excluirMunicipio,
  // Outras funções do controlador relacionadas a Município...
};
