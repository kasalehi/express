import express from 'express';
import bodyParser  from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url'; 

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
const app=express()
const port=3001;
app.use(bodyParser.urlencoded({extended :true}));
app.use(express.static(path.join(__dirname,'public')));

//define jhandlers
app.get('/',(req, res)=>{
    res.render('form.ejs')
})

app.post('/submit',(req, res)=>{
    const name=req.body['username']
    const pass=req.body["password"]
    
    res.render('index.ejs', {name:name, pass:pass})
})

//listening to port 
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`app is listening to port ${port}...`)
})
