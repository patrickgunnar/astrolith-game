const express = require("express");
const cors = require("cors");
const { sum } = require("../../rust/index");

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", (req, res) => {
    res.send(`The sum is ${sum(5, 4)}`);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
