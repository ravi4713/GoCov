const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/contribute',{
    useNewUrlParser:true,
    useCreateIndex:true
}
)

const contribute = mongoose.model('contributor',{
    name: {
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true
    },
    number:{
        type:String,
        trim:true
    },
    place:{
        type:String,
        trim:true
    },
    state:{
        type:String,
        trim:true
    },
    contri:{
        type:String,
        trim:true
    },
})

module.exports = contribute