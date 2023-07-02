// models/UF.js
const oracledb = require('oracledb');

class UF {
  static async criarUF(nome, sigla) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        `INSERT INTO UF (nome, sigla) VALUES (:nome, :sigla)`,
        [nome, sigla]
      );
      return result.rowsAffected === 1;
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

  static async obterUF(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        `SELECT * FROM UF WHERE id = :id`,
        [id]
      );
      return result.rows[0];
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

  static async atualizarUF(id, nome, sigla) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        `UPDATE UF SET nome = :nome, sigla = :sigla WHERE id = :id`,
        [nome, sigla, id]
      );
      return result.rowsAffected === 1;
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

  static async excluirUF(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        `DELETE FROM UF WHERE id = :id`,
        [id]
      );
      return result.rowsAffected === 1;
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

  // Outros métodos relacionados a UF...
}

module.exports = UF;
