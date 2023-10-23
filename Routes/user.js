const express = require('express');
const UsersData = require('../controller/user')
const router = express.Router();


router 
     .post( '/' , UsersData.Create )
     .get('/' , UsersData.Getall )
     .get('/:id' , UsersData.Read )
     .put( '/:id' , UsersData.Replace )
     .patch('/:id' , UsersData.Update )
     .delete('/:id' , UsersData.delet )

exports.router = router; 