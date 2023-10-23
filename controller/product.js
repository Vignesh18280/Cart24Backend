// const fs = require('fs');
// // const index = fs.readFileSync('index.html','utf-8');
// const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
// const products = data.products;
const data = require('../model/Products');
const mongoose = require('mongoose');
const product = data.product;


exports.Create = (req, res) => {
    const Sproduct = new product(req.body);
    Sproduct.save()
      .then(doc => {
        console.log({ doc });
        res.json(doc);
      })
      .catch(err => {
        console.error(err);
        res.status(500).send("Error saving product to database");
      });
  };

exports.Getall = async (req,res)=>{
        const products = await product.find();
        res.json(products);
        console.log(products);
};

exports.Read = async (req , res)=>{
    const {id} = req.params;    
    const products = await product.findById(id);
    res.json([products]);
    console.log(typeof(products));
};

exports.Replace = async (req,res)=>{
    const id = req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // products.splice(productIndex,1,{id:id,...req.body});
    // res.status(201).json(products[productIndex]);
    try{
      const doc =await product.findOneAndReplace({_id : id },req.body,{returnDocument:'after'});
      res.json(doc);
      console.log(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};

exports.Update =async (req,res)=>{
    const id = req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // const product = products[productIndex];
    // products.splice(productIndex,1,{...product,...req.body});

    try{
      const doc =await product.findOneAndUpdate({_id : id },req.body,{returnDocument:'after'});
      res.json(doc);
      console.log(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};

exports.delet = async (req,res)=>{
    const id = req.params.id;
    // const productIndex = products.findIndex(p=>p.id===id);
    // const product = products[productIndex];
    // products.splice(productIndex,1);
    try{
      const doc =await product.findOneAndDelete({_id : id });
      res.json(doc);
      console.log(doc);
    }
    catch(err){
      console.log(err);
      res.status(400).json(err);
    }
};



