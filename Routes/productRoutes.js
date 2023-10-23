const express = require('express');
const ProductData = require('../controller/product')
const router = express.Router();


router 
     .post( '/' , ProductData.Create )
     .get('/' , ProductData.Getall )
     .get('/:id' , ProductData.Read )
     .put( '/:id' , ProductData.Replace )
     .patch('/:id' , ProductData.Update )
     .delete('/:id' , ProductData.delet )

exports.router = router; 