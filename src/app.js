const path = require("path")
const express= require("express")
const hbs = require('hbs')
const app = express()



//for view 
//pages that are kept under dynamic
// app.set('view engine','hbs')
// app.set('views',path.join(__dirname,'../views/views'))

//for partials
hbs.registerPartials(path.join(__dirname,'../views/partials'))

//for public folder where we kept css js and img file
app.use(express.static(path.join(__dirname,"../public")))



app.get("/", (req, res) => {
    res.render('index')
})



app.get('*', (req,res) => {
    res.send("<h1>404 page Not Found</h1>")
})
app.listen(8080, () => {
    console.log("Running on Port 8080");
})