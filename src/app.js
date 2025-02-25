const express = require("express");
const app = express();

app.use("/hello", (req, res) => {
    res.send("It will handle requests with /hello url path");
});

app.use((req, res) => {
    res.send("It will handle all the requests");
});

app.listen(3000, () => {
    console.log("Server is running on port: 3000");
});