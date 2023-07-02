// models/Bairro.js
const oracledb = require('oracledb');

class Bairro {
  static async criarBairro(nome, cidadeId) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'INSERT INTO Bairro (nome, cidade_id) VALUES (:nome, :cidadeId)',
        [nome, cidadeId]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao criar bairro:', err);
      throw err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Erro ao fechar conexão com o banco de dados:', err);
        }
      }
    }
  }

  static async obterBairro(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'SELECT * FROM Bairro WHERE id = :id',
        [id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Erro ao obter bairro:', err);
      throw err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Erro ao fechar conexão com o banco de dados:', err);
        }
      }
    }
  }

  static async atualizarBairro(id, nome, cidadeId) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'UPDATE Bairro SET nome = :nome, cidade_id = :cidadeId WHERE id = :id',
        [nome, cidadeId, id]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao atualizar bairro:', err);
      throw err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Erro ao fechar conexão com o banco de dados:', err);
        }
      }
    }
  }

  static async excluirBairro(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'DELETE FROM Bairro WHERE id = :id',
        [id]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao excluir bairro:', err);
      throw err;
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error('Erro ao fechar conexão com o banco de dados:', err);
        }
      }
    }
  }

  // Outros métodos relacionados a Bairro...
}

module.exports = Bairro;
