const Sequelize = require("sequelize");

class ProductoService {
  constructor() {
    this.sequelize = new Sequelize("mysql://cliente:cliente@localhost:3306/smartbikeinventory");
  }

  async getAllProductos(cliente) {
    try {
      const query = "SELECT * FROM producto WHERE producto.prodStock > 0";
      return this.sequelize.query(query, { type: Sequelize.QueryTypes.SELECT });
    } catch (error) {
      console.error("Error al ejecutar la consulta:", error);
      return [];
    }
  }
}

module.exports = ProductoService;
