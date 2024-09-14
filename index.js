const express = require('express');
const ip = require('ip');
const app = express();

app.get('/', (req, res) => {
    console.log("Server is running");
    res.send('Smart Car');
})

app.get('/forward', (req, res) => {
    console.log("forward");
    res.send("forward");
})

app.get('/backward', (req, res) => {
    console.log("backward");
    res.send("backward");
})

app.get('/left', (req, res) => {
    console.log("left");
    setTimeout(() => {
        res.send("left");
    }, 10000)

})

app.get('/right', (req, res) => {
    console.log("right");
    res.send("right");
})

app.get('/stop', (req, res) => {
    console.log("stop");
    res.send("stop");
})

app.get("/leftTurn", (req, res) => {
    console.log("leftTurn");
    res.send("leftTurn");
})

app.get("/rightTurn", (req, res) => {
    console.log("rightTurn");
    res.send("rightTurn");
})


app.listen(80, () => {
    console.log(`Server is running http://192.168.43.81`);
})