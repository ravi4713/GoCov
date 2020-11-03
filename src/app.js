const path = require("path")
const express= require("express")
const hbs = require('hbs')
const app = express()
const ngo = require('./database/models')
const bodyParser = require('body-parser')

app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());



//for partials
hbs.registerPartials(path.join(__dirname,'../views/partials'))

//for public folder where we kept css js and img file
app.use(express.static(path.join(__dirname,"../public")))

app.get("/admin", (req, res) => {
    
    ngo.find({verified:false}).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
})

app.patch("/admin/:id", (req,res) => {
    ngo.findByIdAndUpdate(req.params.id,{verified:true},{new:true}).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
    

})
app.delete("/admin/remove/:id", (req,res) => {
    ngo.findByIdAndDelete(req.params.id).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
    

})
app.get("/ngo", (req, res) => {
    
    ngo.find({verified:true}).then((data)=>{
        res.send(data)
    }).catch((e)=>{
        res.send(e)
    })
})

app.post("/ngo",(req,res)=>{
    datasend = {
        "name":req.body.name,
        "email":req.body.email,
        "number":req.body.num,
        "place":req.body.place,
        "state":req.body.state,
        "des":req.body.des,
        "url":req.body.url
    }

    console.log(datasend)
    const ngos = new ngo(datasend)
    ngos.save().then(()=>{
        res.redirect('/ngo.html')
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