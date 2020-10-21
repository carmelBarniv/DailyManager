import Sequelize from 'sequelize';

export default class SqlHandler {
    constructor() {
        this.sequelize = 
        new Sequelize('Daily', 'carmel', 'car', {
            // host:'localhost/DESKTOP-BVF3S3O/SQLEXPRESS',
            dialect: 'mssql'
          })
          
    }

    async Execute(query) {
        const [results, metadata] = await this.sequelize.query(query);
        return {results, metadata};
    }
}


