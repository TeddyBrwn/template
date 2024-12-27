const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

// configuration
dotenv.config();

const app = express();

//Middleware
app.use(express.json());
app.use(
  cors({
    origin: ["hhtps://localhost:4000"],
    credentials: true,
  })
);

//Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connect Server 🟢"))
  .catch((err) => console.log("Faild to connect server", err.message));

//PORT
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} 🚀`));
