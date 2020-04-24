const mongoose=require('mongoose'); //pointing to a collection in database

const LaptopSchema=new mongoose.Schema({
    link : String,
    title:String,
    price:Number,
    type:String,
    isEnabled:Boolean
})

const LaptopsModel=mongoose.model("Laptops",LaptopSchema);   //parameters=name of model and schema and collection

LaptopsModel.findLaptops = function (req, callBack) {
    let id = req.query.title;
    let p = req.query.price;
    let query = {};
    if (id) {
        query = { title : id , price: p}
    }
    LaptopsModel.find(query, callBack);
}
module.exports=LaptopsModel;