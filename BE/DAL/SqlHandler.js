var sql = require("mssql");
// const config = require('../Common/Config/config.json');

class SqlHandler {
    constructor() {
        this.dbConfig = {
            // user: config.db.user,
            // server: config.db.server,
            // database: config.db.database
            sever:"localHost\\DESKTOP-BVF3S3O\\SQLEXPRESS",
            user:"DESKTOP-BVF3S3O\\Admin",
            database:"model"
        };
    }

    async Execute(query) {
        let result;
        let pool = await sql.connect(this.dbConfig)
        let request = pool.request();
        await request.query(query)
            .then((recordset) => {
                result = recordset;
            });
        return result;
    }
}

module.exports = SqlHandler;