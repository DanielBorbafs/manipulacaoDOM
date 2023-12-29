const connection = require('./connection')

const getAll = async () => {
    const [users] = await connection.execute('SELECT * FROM users');
    return users;
}

const createUser = async (users) => {
    const { nome } = users;
    const dateUTC = new Date(Date.now()).toUTCString();
    query = 'INSERT INTO users(nome, statusProcesso, iniciado_em) VALUES(?, ?, ?)';

    const [createdUser] = await connection.execute(query, [nome, 'pendente', dateUTC ]);
        return {insertId: createdUser.insertId}
}

module.exports = {
    getAll,
    createUser
}