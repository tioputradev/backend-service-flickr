require("dotenv").config();
const express = require("express");
const { PORT } = require("./config/env");

const app = express();

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
