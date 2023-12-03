const Sequelize = require("sequelize");

class ClienteService {
  constructor() {
    this.sequelize = new Sequelize("mysql://empleado:empleado@localhost:3306/smartbikeinventory");
  }

  async guardarCliente(cliente) {
    try {
      const result = await this.sequelize.query(
        "CALL registrar_cliente(:cliCedula, :cliNombre, :cliTelefono, :cliEmail, :motPlaca, :modMot, :marMoto)",
        {
          replacements: {
            cliCedula: cliente.cliCedula,
            cliNombre: cliente.cliNombre,
            cliTelefono: cliente.cliTelefono,
            cliEmail: cliente.cliEmail,
            motPlaca: cliente.motPlaca,
            modMot: cliente.modMoto,
            marMoto: cliente.marMoto,
          },
          type: Sequelize.QueryTypes.RAW,
        }
      );
      console.log("Resultado del procedimiento almacenado:", result);
      return true;
    } catch (error) {
      console.error("Error al ejecutar el procedimiento almacenado:", error);
      return false;
    }
  }
}

module.exports = ClienteService;
