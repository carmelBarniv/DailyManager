import Sequelize from 'sequelize';
import config from '../../Common/Config/config.js';

class SqlHandler {
    constructor() {
        this.sequelize = new Sequelize(config.db.name, config.db.userName, config.db.password, {
            dialect: config.db.dialect
          })
    }

    get sequelizer(){
        return this.sequelize;
    }

    async Execute(query) {
        const [results, metadata] = await this.sequelize.query(query);
        return results;
    }
}


export default new SqlHandler();
