const oracledb = require('oracledb');

const dbConfig = {
  user: 'C##NODE',
  password: 'node',
  connectString: 'localhost:1521/XE'
};

async function abrirdb() {
  let connection;

  try {
    connection = await oracledb.getConnection(dbConfig);
    console.log('Conexão com o banco de dados Oracle estabelecida!');
    return connection;
  } catch (err) {
    console.error('Erro ao conectar ao banco de dados Oracle:', err);
    throw err;
  }
}


