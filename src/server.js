require("dotenv").config({ path: "variaveis.env" }); //ler arquivo de variáveis
const express = require("express");
const cors = require("cors"); //permite acesso a recursos de sites mesmo estando em dominios diferentes
const bodyParser = require("body-parser");

const routes = require("./routes");

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api", routes); // endereços vão ter o prefixo /api

server.listen(process.env.PORT, () => {
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});
