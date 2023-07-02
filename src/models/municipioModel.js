// models/Municipio.js
const oracledb = require('oracledb');

class Municipio {
  static async criarMunicipio(nome, ufId) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'INSERT INTO Municipio (nome, uf_id) VALUES (:nome, :ufId)',
        [nome, ufId]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao criar município:', err);
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

  static async obterMunicipio(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'SELECT * FROM Municipio WHERE id = :id',
        [id]
      );
      return result.rows[0];
    } catch (err) {
      console.error('Erro ao obter município:', err);
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

  static async atualizarMunicipio(id, nome, ufId) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'UPDATE Municipio SET nome = :nome, uf_id = :ufId WHERE id = :id',
        [nome, ufId, id]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao atualizar município:', err);
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

  static async excluirMunicipio(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'DELETE FROM Municipio WHERE id = :id',
        [id]
      );
      return result.rowsAffected === 1;
    } catch (err) {
      console.error('Erro ao excluir município:', err);
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

  // Outros métodos relacionados a Município...
}

module.exports = Municipio;
