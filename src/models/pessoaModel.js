// models/Pessoa.js
const oracledb = require('oracledb');

class Pessoa {
  static async criarPessoa(nome, idade, endereco) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'INSERT INTO Pessoa (nome, idade, endereco) VALUES (:nome, :idade, :endereco)',
        [nome, idade, endereco]
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

  static async obterPessoa(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'SELECT * FROM Pessoa WHERE id = :id',
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

  static async atualizarPessoa(id, nome, idade, endereco) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'UPDATE Pessoa SET nome = :nome, idade = :idade, endereco = :endereco WHERE id = :id',
        [nome, idade, endereco, id]
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

  static async excluirPessoa(id) {
    let connection;
    try {
      connection = await oracledb.getConnection();
      const result = await connection.execute(
        'DELETE FROM Pessoa WHERE id = :id',
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

  // Outros métodos relacionados a Pessoa...
}

module.exports = Pessoa;
