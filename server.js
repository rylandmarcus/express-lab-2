const express = require('express');
const app = express();

app.get('/greeting', (req, res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res)=>{
    stranger = req.params.name
    res.send(`What's up, ${stranger}`)
})

app.get('/tip/:total/:tipPercentage', (req, res)=>{
    console.log(req.params);
    res.send(`If the bill total is $${req.params.total}, and you want to tip %${req.params.tipPercentage}, then you need to tip $${req.params.total * (req.params.tipPercentage/100)}.`)
})

app.listen(3000, () => {
    console.log('listening');
});