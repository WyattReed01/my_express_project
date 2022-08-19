const express = require('express')
const app = express();
const PORT = 4444

app.get('/hello', (req, res) =>{
    res.send('whaddup')
})

app.get('/goodbye', (req,res)=>{
    res.send('later...')
})

app.post('/', function (req,res){
    res.end('go to GET and put in /hello')
})

app.listen(`${PORT}`, (req, res)=>{
    console.log(`listening on ${PORT}`)
})