const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const port = 4000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    console.log("Pagina de Inicio ");
});

app.post("/saludar", (req, res) => {
    res.send("hola pana" + res.body.text + "" + res.body.text2);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
