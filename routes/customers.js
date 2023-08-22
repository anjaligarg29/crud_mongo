const { Customer } = require('../models/customer'); 
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        let customer = new Customer({
            name: req.body.name,
            isAdmin: req.body.isAdmin,
            Phone: req.body.Phone
        });
        customer = await customer.save();
        res.send(customer);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/', async (req, res) => {
    try {
        const customers = await Customer.find();
        res.send(customers);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.put('/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        let customer = await Customer.findByIdAndUpdate(req.params.id,{
            name:req.body.name,
            isAdmin:req.body.isAdmin,
            Phone: req.body.Phone
        },{new:true});

        await customer.save();
        res.send("user updated succesfully");
    }
    catch (error) {
        res.status(500).send(error.message);
    }
})

router.route('/:id',async(req,res)=>{
    const customer = Customer.findByIdAndRemove(req.params.id);
    if(!customer) return res.status(404).send('The customer with the given ID was not found.');
 
    res.send(customer);
})

module.exports = router;
