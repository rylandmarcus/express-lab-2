const express = require('express');
const app = express();
const answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

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

app.get('/magic/:question', (req, res)=>{
    let randomAnswer = answers[Math.floor(Math.random()*answers.length)]
    res.send(req.params.question+'?'+'<h2>Answer:</h2>'+`<h1>${randomAnswer}</h1>`)
    // res.send(randomAnswer)
    console.log(req.params);
})

app.get('/beer/', (req, res)=>{
    res.send('99 bottles of beer on the wall'+'<h3><a href="beer/98">take one down, pass it around</a></h3>')
})

app.get('/beer/:number_of_bottles', (req, res)=>{
    if (req.params.number_of_bottles==0){
        res.send('No more bottles of beer on the wall!'+`<h3><a href="./">Start Over?</a></h3>`)
    } else {
        res.send(`${req.params.number_of_bottles} bottles of beer on the wall`+`<h3><a href="./${req.params.number_of_bottles-1}">take one down, pass it around</a></h3>`)
    }
})

app.get('/bugs/', (req, res)=>{
    res.send('99 little bugs in the code'+'<h3><a href="bugs/98">take on down, patch it around</a></h3>')
})

app.get('/bugs/:number_of_bugs', (req, res)=>{
    if (req.params.number_of_bugs==0){
        res.send('No more bugs in the code!'+`<h3><a href="./">Start Over?</a></h3>`)
    } else {
        let random4 = Math.floor(Math.random()*4)
        if (random4===3){
            res.send(`${req.params.number_of_bugs} bugs in the code`+`<h3><a href="./${parseInt(req.params.number_of_bugs)+(Math.floor(Math.random()*30))}">take on down, patch it around</a></h3>`)
        } else {
            res.send(`${req.params.number_of_bugs} bugs in the code`+`<h3><a href="./${req.params.number_of_bugs-1}">take on down, patch it around</a></h3>`)
        }
    }
})

app.get('/fibonacci/:number', (req, res)=>{
    let isPerfectSquare = (x)=>{
        let s = parseInt(Math.sqrt(x))
        return (s*s==x)
    }
    if (req.params.number==0 || req.params.number==1){
        res.send('Very good. It is Fibonacci')
    } else if (isPerfectSquare((5*parseInt(req.params.number)*parseInt(req.params.number))+4)) {
        res.send('Very good. It is Fibonacci')
    } else if (isPerfectSquare((5*parseInt(req.params.number)*parseInt(req.params.number))-4)) {
        res.send('Very good. It is Fibonacci')
    } else {
        res.send('I can tell this is not a fibonacci number.')
    }
})

app.listen(3000, () => {
    console.log('listening');
});