const express = require("express");
const app = express();

app.listen(8080, () => console.log("listening on http://localhost:8080/"));

app.use(express.static('public'));