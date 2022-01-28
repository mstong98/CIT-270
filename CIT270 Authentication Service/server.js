const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
res.send("Hello browser");
});

app.post('/login', (req,res) =>{
    console.group(JSON.stringify(req.body));
    if(req.body.userName =="mstong98" && req.body.password=="mikey"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

app.listen(port, ()=>{});