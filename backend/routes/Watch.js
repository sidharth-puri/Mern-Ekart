var express=require('express');
const router=express.Router();
const Watches=require('../models/Watch');


router.get('/',(req,res) => {
    Watches.findWatches(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
})

router.post('/addWatch',(req, res)=>{
    const { link,title,price } = req.body;
    const newWatch = new Watches({link,title,price});
    newWatch.save(err=>{
        if(err)
        res.status(500).json({message: {msgBody: "Error has occured" , msgError: true}});
        else
        res.status(201).json({message: {msgBody: "Watch Added Successfully" , msgError: false}});
    })
});
module.exports = router;