const express = require("express");
const cors = require("cors");
const path = require("path");
const ClienteService = require("./services/clienteService.js");
const MarcaMotoService = require("./services/marcamotoService.js");
const ModeloMotoService = require("./services/modelomotoService.js");
const ProductoService = require("./services/productoService.js");
const VentaService = require("./services/ventaService.js");
const PedidoService = require("./services/pedidoService.js");
const ProveedorService = require("./services/proveedorService.js");
const LoginService = require("./services/loginService.js");

/*
    INSTANCIACIÓN DE SERVICIOS
*/

const clienteService = new ClienteService();
const marcaMotoService = new MarcaMotoService();
const modeloMotoService = new ModeloMotoService();
const productoService = new ProductoService();
const ventaService = new VentaService();
const proveedorService = new ProveedorService();
const pedidoService = new PedidoService();
const loginService = new LoginService();

/*
    CONFIGURACIÓN EXPRESS
*/

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "dist/smartbikeinventory")));

app.get("/app", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/smartbikeinventory/index.html"));
});

app.get("/marcamoto", (req, res) => {
  return marcaMotoService.getAllMarcas().then((result) => {
    res.json(result);
  });
});

app.get("/modelomoto", (req, res) => {
  return modeloMotoService.getAllModelos().then((result) => {
    res.json(result);
  });
});

app.get("/producto", (req, res) => {
  return productoService.getAllProductos().then((result) => {
    res.json(result);
  });
});

app.get("/proveedor", (req, res) => {
  return proveedorService.getAllProveedores().then((result) => {
    res.json(result);
  });
});

app.get("/pedido", (req, res) => {
  return pedidoService.getAllPedidos().then((result) => {
    res.json(result);
  });
});

app.post("/pedido/consolidar", (req, res) => {
  return pedidoService.consolidarPedido(req.body).then((result) => {
    if (result) {
      res.status(201).send("Pedido consolidado exitosamente");
    } else {
      res.status(400).send("Error al consolidar el pedido");
    }
  });
});

app.post("/cliente/crear", (req, res) => {
  clienteService.guardarCliente(req.body).then((result) => {
    if (result) {
      res.status(201).send("Cliente creado exitosamente");
    } else {
      res.status(400).send("Error al crear el cliente");
    }
  });
});

app.post("/venta", (req, res) => {
  ventaService.guardarVenta(req.body).then((result) => {
    if (result) {
      res.status(201).send("Venta creada exitosamente");
    } else {
      res.status(400).send("Error al crear la venta");
    }
  });
});

app.post("/pedido", (req, res) => {
  pedidoService.guardarPedido(req.body).then((result) => {
    if (result) {
      res.status(201).send("Pedido creado exitosamente");
    } else {
      res.status(400).send("Error al crear el Pedido");
    }
  });
});

app.post("/login", (req, res) => {
  loginService.doLogin(req.body.email, req.body.password).then((result) => {
    console.log(result);
    if (result.length == 1) {
      res.status(201).send(result[0]);
    } else {
      res.status(400).send({ rolId: -1 });
    }
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
