const express = require('express');
const app = express();
const cors = require('cors');
const telemetrics = require('./routes/telemetrics');
const connectDB = require('./db/connect');
require('dotenv').config();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require('swagger-jsdoc');
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// api port

const port = process.env.PORT || 5000;
const host = process.env.APP_URL || "http:localhost:"+port;

//options

const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Vehicle Telemetrics Management API",
			version: "1.0.0",
			description: "A simple vehicle telemetrics collection API",
		},
		servers: [
			{
				url: host,
			},
		],
	},
	apis: ["./routes/*.js"],
};

const specs = swaggerJsDoc(options);

// middleware

app.use(express.json());

// routes

app.use('/api/v1/telemetrics', telemetrics);
app.use("/api/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(notFound);
app.use(errorHandlerMiddleware);


const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
