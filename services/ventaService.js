const Sequelize = require("sequelize");

class VentaService {
  constructor() {
    this.sequelize = new Sequelize("mysql://empleado:empleado@localhost:3306/smartbikeinventory");
  }
  async guardarVenta(venta) {
    try {
      const query = `CALL registrar_venta('${venta.empCedula}', '${venta.cliCedula}', '${
        venta.venFecha
      }', '${JSON.stringify(venta.detallesVenta)}')`;
      const result = await this.sequelize.query(query);
      console.log("Resultado del procedimiento almacenado:", result);
      return true;
    } catch (error) {
      console.error("Error al ejecutar el procedimiento almacenado:", error);
      return false;
    }
  }
}

module.exports = VentaService;
