const Sequelize = require('sequelize');
const fs = require('fs');
// Модельки робимо як клас
module.exports = class dataBaseConnector {

    constructor() {
        this.client = new Sequelize('testDB', 'root', 'root', {
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


        this.models = [];

        console.log(this.models);
        fs.readdir('./service/DataBase/models', (err, files) => {
            files.forEach(file => {
                this.models.push(file.split('.')[0]);
                console.log(this.models);
            })
        });
    }
    a() {
        forEach(nemaFile => {
            console.log(nemaFile);
            this.models = sequelize.import(resolve('./service/DataBase/models/'+ nemaFile));
        })
    }
};


function a() {
    forEach(nemaFile => {
        console.log(nemaFile);
        this.models = sequelize.import(resolve('./service/DataBase/models/'+ nemaFile));
    })
}
