const Sequelize = require("sequelize");

class PedidoService {
  constructor() {
    this.sequelize = new Sequelize(
      "mysql://administrador:administrador@localhost:3306/smartbikeinventory"
    );
  }

  async getAllPedidos() {
    return this.sequelize.query(
      "SELECT * FROM pedido LEFT join proveedor ON pedido.provId = proveedor.provId",
      {
        type: Sequelize.QueryTypes.SELECT,
      }
    );
  }

  async guardarPedido(pedido) {
    try {
      const query = `CALL registrar_pedido('${pedido.pedFecha}', '${
        pedido.provId
      }', '${JSON.stringify(pedido.detallesPedido)}')`;
      const result = await this.sequelize.query(query);
      console.log("Resultado del procedimiento almacenado:", result);
      return true;
    } catch (error) {
      console.error("Error al ejecutar el procedimiento almacenado:", error);
      return false;
    }
  }

  async consolidarPedido(pedido) {
    try {
      const query = `CALL consolidar_pedido('${pedido.pedFecha}', ${pedido.provId})`;
      const result = await this.sequelize.query(query);
      console.log("Resultado del procedimiento almacenado:", result);
      return true;
    } catch (error) {
      console.error("Error al ejecutar el procedimiento almacenado:", error);
      return false;
    }
  }
}

module.exports = PedidoService;
