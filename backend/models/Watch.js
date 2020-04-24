const mongoose=require('mongoose'); //pointing to a collection in database

const WatchSchema=new mongoose.Schema({
    link : String,
    title:String,
    price:Number,
    type:String,
    isEnabled:Boolean
})

const WatchesModel=mongoose.model("watches",WatchSchema);   //parameters=name of model and schema and collection

WatchesModel.findWatches = function (req, callBack) {
    let id = req.query.title;
    let p = req.query.price;
    let query = {};
    if (id) {
        query = { title : id , price: p}
    }
    WatchesModel.find(query, callBack);
}
module.exports=WatchesModel;