import "dotenv/config";

import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";

import { router as personRouter } from "./routers/person-router.js";
import { router as searchRouter } from "./routers/search-router.js";

/* create an express app and use JSON */
const app = new express();
app.use(express.json());

app.use("/person", personRouter);
app.use("/persons", searchRouter);

/* set up swagger in the root */
const swaggerDocument = YAML.load("api.yaml");
app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

/* start the server */
app.listen(8080);
