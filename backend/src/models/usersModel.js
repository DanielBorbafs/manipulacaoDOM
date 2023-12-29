const connection = require('./connection')

const getAll = async () => {
    const users = await connection.execute('SELECT * FROM tasks');
    return users;
}


module.exports = {
    getAll
}