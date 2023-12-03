const Sequelize = require("sequelize");

class PedidoService {
  constructor() {
    this.sequelize = new Sequelize(
      "mysql://administrador:administrador@localhost:3306/smartbikeinventory"
    );
  }

  getAllProveedores() {
    return this.sequelize.query("SELECT * FROM proveedor", {
      type: Sequelize.QueryTypes.SELECT,
    });
  }
}

module.exports = PedidoService;
