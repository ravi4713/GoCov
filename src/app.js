const path = require("path")
const express= require("express")
const hbs = require('hbs')
const app = express()
const contribute = require('./database/models')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//for partials
hbs.registerPartials(path.join(__dirname,'../views/partials'))

//for public folder where we kept css js and img file
app.use(express.static(path.join(__dirname,"../public")))



app.get("/contribute", (req, res) => {
    
    contribute.find({}).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
})

app.post("/contribute",(req,res)=>{
    datasend = {
        "name":req.body.name,
        "email":req.body.email,
        "number":req.body.num,
        "place":req.body.place,
        "state":req.body.state,
        "contri":req.body.con,
    }

    console.log(datasend)
    const contribut = new contribute(datasend)
    contribut.save().then(()=>{
        res.redirect('/contribute.html')
    }).catch((e)=>{
        res.status(400).send(e)
    })
})


app.get('*', (req,res) => {
    res.send("<h1>404 page Not Found</h1>")
})
app.listen(8080, () => {
    console.log("Running on Port 8080");
})