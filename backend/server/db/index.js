const {Pool} = require('pg');
const pool = new Pool(
    {
        user: 'postgres',
        host: 'localhost',
        database: 'sm_users',
        password: 'Hwer44JI75',
        port: 5432,
    }
);

module.exports = {
    query: (text, params) => pool.query(text, params),
};