const express = require('express');
const app = express();

app.get("/", (req, res) => {
    const id = req.query.id;
    const username = req.query.username;
    const json = { id: 1, title: "cdac" };
    res.json(json);
})

app.listen(3000);