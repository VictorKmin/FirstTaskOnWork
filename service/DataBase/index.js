const Sequelize = require('sequelize');
const fs = require('fs');
const resolve = require('path').resolve;

module.exports = (() => {
    let instance;
    function initConnection() {
            let client = new Sequelize('testDB', 'root', 'root', {
                host: 'localhost',
                dialect: 'postgres',
                operatorsAliases: false,

                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                }
            });
            let models = {};

        function getModels() {
            fs.readdir('./service/DataBase/models', (err, files) => {
                files.forEach(file => {
                    const modelName = file.split('.')[0];
                    models[modelName] = client.import(resolve(`./service/DataBase/models/${modelName}`));
                    console.log(client.models);
                });
            });
        }

        return {
            getModel: (modelName) => models[modelName],
            setModels: () => {
                return getModels();
            }
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = initConnection();
            }
            return instance;
        }
    }
})();

// КОНЕКТОР ЧЕРЕЗ КЛАС
// module.exports = class dataBaseConnector {
//
//     constructor() {
//         this.client = new Sequelize('testDB', 'root', 'root', {
//             host: 'localhost',
//             dialect: 'postgres',
//             operatorsAliases: false,
//
//             pool: {
//                 max: 5,
//                 min: 0,
//                 acquire: 30000,
//                 idle: 10000
//             }
//         });
//         this.models = {};
//     }
//
//     init() {
//         fs.readdir('./service/DataBase/models', (err, files) => {
//             files.forEach(file => {
//                 const modelName = file.split('.')[0];
//                 this.models[modelName] = this.client.import(resolve(`./service/DataBase/models/${modelName}`));
//             });
//         });
//     }
//
//     getModel(modelName) {
//         return this.models[modelName];
//     }
// };
