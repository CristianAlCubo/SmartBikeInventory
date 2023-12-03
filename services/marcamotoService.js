const Sequelize = require("sequelize");

class MarcaMotoService {
  constructor() {
    this.sequelize = new Sequelize("mysql://empleado:empleado@localhost:3306/smartbikeinventory");
  }

  getAllMarcas() {
    return this.sequelize.query("SELECT * FROM marca_moto", {
      type: Sequelize.QueryTypes.SELECT,
    });
  }
}

module.exports = MarcaMotoService;
