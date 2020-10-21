import Sequelize from 'sequelize';
import config from '../Common/Config/config.js';

export default class SqlHandler {
    constructor() {
        this.sequelize = new Sequelize(config.db.name, config.db.userName, config.db.password, {
            dialect: config.db.dialect
          })
    }

    async Execute(query) {
        const [results, metadata] = await this.sequelize.query(query);
        return {results, metadata};
    }

    async GetExecutedId(query){
        const [results, metadata] = await this.sequelize.query(`${query}
        SELECT SCOPE_IDENTITY()`);
        return results[0][""]; // "" is the object key to the last connection inserted row (build in sql)
    }
}


