const express = require('express');
const bodyParser = require('body-parser');

const https = require('https')
const fs = require('fs')

const port = 443;
const md5 = require('md5');

const app = express()

app.use(express.static('public'));

app.use(bodyParser.json());

app.get('/', (req, res)=>{
res.send("Hello HTTPS!")
})

https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
  }, app).listen(443, () => {
    console.log('Listening...')
  })

app.post('/login', (req,res) =>{
    console.group(JSON.stringify(req.body));
    if(req.body.userName =="mstong98" && md5(req.body.password)=="0bf44a9634896de88678e56222c1b012"){
        res.send("Welcome!")
    } else{
        res.send("Who are you?");
    }
});

//app.listen(port, ()=>{});