const Sequelize = require("sequelize");

class ModeloMotoService {
  constructor() {
    this.sequelize = new Sequelize("mysql://empleado:empleado@localhost:3306/smartbikeinventory");
  }

  getAllModelos() {
    return this.sequelize.query("SELECT * FROM modelo_moto", {
      type: Sequelize.QueryTypes.SELECT,
    });
  }
}

module.exports = ModeloMotoService;
