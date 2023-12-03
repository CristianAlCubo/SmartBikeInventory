const Sequelize = require("sequelize");

class MarcaMotoService {
  constructor() {
    this.sequelize = new Sequelize(
      "mysql://administrador:administrador@localhost:3306/smartbikeinventory"
    );
  }

  doLogin(usuario, password) {
    return this.sequelize.query(
      `SELECT rolId FROM usuario WHERE usuEmail='${usuario}' AND usuPassword='${password}'`,
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
  }
}

module.exports = MarcaMotoService;
