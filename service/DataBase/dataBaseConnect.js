// const pg = require('pg');
// const url = 'postgres://root:root@localhost/testDB';
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(url);
//
// module.exports = sequelize;




// const pg = require('pg');
// const url = 'postgres://root:root@localhost/testDB';
// pg.connect(url, (err, client, done)=> {
//     if (err) {
//         return console.error('FIRST ERRR', err)
//     }
//     client.query ('SELECT * FROM testDB', (err, result)=> {
//         if (err) {
//             return console.error('SECOND ERR', err)
//         }
//         res.render('index', {testDB : result.rows});
//         done();
//     })
// });
//





// const Sequelize = require('sequelize');
// const sequelize = new Sequelize('testDB', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'postgres',
//     operatorsAliases: false,
//
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }
// });
//
// module.exports = sequelize;