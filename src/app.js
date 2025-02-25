const express = require("express");
const app = express();

// route parameters
app.get('/user/:id', (req, res) => {
    res.send(`User id is ${req.params.id}`);
});

// regular expression in dynamic routes
app.get('/user/:id(\\d+)', (req, res) => {
    res.send(`User id is ${req.params.id}`);
});

// multiple route parameters
app.get('/user/:id/:name', (req, res) => {
    res.send(`User id is ${req.params.id} and name is ${req.params.name}`);
});

// optional parameters
app.get('/user/:id/:name?', (req, res) => {
    const { id, name } = req.params;
    if(name) {
        res.send(`User id is ${id} and name is ${name}`);
    } else {
        res.send(`User id is ${id}`);
    }
});

// query parameters
app.get('/users', (req, res) => {
    const { page, limit } = req.query;
    res.send(`Page is ${page} and limit is ${limit}`);
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});