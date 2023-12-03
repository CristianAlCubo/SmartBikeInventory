export class MarcaMoto {
  constructor(marMotoId, marMotoNombre) {
    this.marMotoId = marMotoId;
    this.marMotoNombre = marMotoNombre;
  }
}

export class ModeloMoto {
  constructor(modMotoId, modMotoNombre, modMotoMarca) {
    this.modMotoId = modMotoId;
    this.modMotoNombre = modMotoNombre;
    this.modMotoMarca = modMotoMarca;
  }
}
export class Moto {
  constructor(motPlaca, modMoto, cliCedula) {
    this.motPlaca = motPlaca;
    this.modMoto = modMoto;
    this.cliCedula = cliCedula;
  }
}
export class Cliente {
  constructor(cliCedula, cliNombre, cliTelefono, cliEmail) {
    this.cliCedula = cliCedula;
    this.cliNombre = cliNombre;
    this.cliTelefono = cliTelefono;
    this.cliEmail = cliEmail;
  }
}
export class Usuario {
  constructor(usuId, usuPassword, usuEmail, usuRol) {
    this.usuId = usuId;
    this.usuPassword = usuPassword;
    this.usuEmail = usuEmail;
    this.usuRol = usuRol;
  }
}
