// app.ts
import express, { Request, Response } from "express";
import monolithHealthRouter from './routes/monolith_health'
import swaggerUi from "swagger-ui-express";
import * as swaggerDocument from './swagger.json'; // Path to your generated swagger.json

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello world!");
});

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/monolith-health", monolithHealthRouter);

export default app;
