const express = require('express');
const app = express();

app.get('/greeting', (req, res)=>{
    res.send('Hello, stranger')
})

app.get('/greeting/:name', (req, res)=>{
    stranger = req.params.name
    res.send(`What's up, ${stranger}`)
})



app.listen(3000, () => {
    console.log('listening');
});