import express from "express";
import morgan from "morgan";
// Routes
import languageRoutes from "./routes/language.routes";
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app = express();
const path = require("path")
// Settings
app.set("port", 4000);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
const swaggerSpec = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Sistema de Citas Medicas",
            version: "1.0.0"
        },
        servers:[
            {
                url: "http://localhost:4000"
            }
        ]
    },
    apis:[`${path.join(__dirname,"./routes/language.routes.js")}`]
}
app.use("/api/citas", languageRoutes);
app.use("/api/doc", swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
export default app;
