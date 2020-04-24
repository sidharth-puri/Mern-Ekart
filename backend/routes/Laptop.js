var express=require('express');
const router=express.Router();
const Laptops=require('../models/Laptop');


router.get('/',(req,res) => {
    Laptops.findLaptops(req, (error, response) => {
        if (error) console.log("Error is: ", error);
        if (response) {
            // console.log("Success response is: ", response);
            res.send(response);
        }
    });
})

router.post('/addLaptop',(req, res)=>{
    const { link,title,price } = req.body;
    const newLaptop = new Laptops({link,title,price});
    newLaptop.save(err=>{
        if(err)
        res.status(500).json({message: {msgBody: "Error has occured" , msgError: true}});
        else
        res.status(201).json({message: {msgBody: "Laptop Added Successfully" , msgError: false}});
    })
});
module.exports = router;