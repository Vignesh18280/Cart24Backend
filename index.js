require('dotenv').config()
const mongoose = require('mongoose');
const { Schema } = mongoose;
const express = require('express');
const cors = require('cors');
// const Router = express.Router();
//BajgKniJILMmcKnV -> mongoDB password
const server = express();
const Productrouter = require('./Routes/productRoutes');
// const Userrouter = require('./Routes/user');
const Loginrouter=require('./Routes/Loginrouter');

//linking mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/ecommerce');
  console.log('connected succesfully')
}




// const morgan = require('morgan');
// server.use((req,res,next)=>{
//     console.log( req.hostname , req.ip , req.baseUrl , new Date() , req.get('User-Agent') , req.get('Accept-Language') , req.get('Status Code'));
//     next();
// })
// server.use(morgan('default'));
//to identify ProductData
server.use(cors());
server.use(express.json());
server.use(express.static('public'))
server.use(express.json());
server.use(express.static('public'))
server.use('/products' , Productrouter.router);
// server.use('/users' , Userrouter.router);
server.use('/login' , Loginrouter.router);
console.log('env' , process.env.DB_PASSWORD)

// const auth = (req , res , next )=>{
//     // console.log(req.query);
//     // if(req.query.password){
//     //     next();
//     // }
//     // else{
//     //     res.status(401).json({error : 'Not Authenticated'});
//     // }
// }

// server.use(auth);
// Create in C R U D


// Router 
//      .post( '/products' , ProductData.Create )
//      .get('/products' , ProductData.Getall )
//      .get('/products/:id' , ProductData.Read )
//      .put( '/products/:id' , ProductData.Replace )
//      .patch('/products/:id' , ProductData.Update )
//      .delete('/products/:id' , ProductData.delet )

// server.delete ( '/' , (req,res)=>{
//         res.json({text:'DELETE'});
// })

// server.patch( '/' , (req,res)=>{
//         res.json({text : 'PATCH'});
// })

// server.get('/',(req,res)=>{
//     // res.send(index);
//     res.sendStatus(200);
//     // res.sendFile('C:/Users/vignesh/OneDrive/Desktop/node-app/index.html');
//     // res.json ProductData);
// })

// const server = http.createServer((req,res)=>{

//     if(req.url.startsWith('/product')){
//         const id = req.url.split('/')[2];
//         const prd = product.find(p=>p.id===(+id));
//         console.log(prd);
//         // res.setHeader('Content-Type','application/json');
//         // let modif = index.replace('**title**',products.title);
//         let modif = index.replace('**title**', prd.title).replace('**img**', prd.thumbnail);
//         res.end(modif);
//         return;   
//     }

//     // switch(req.url){
//     //     case '/' :
//     //          res.setHeader('Content-Type','text/html');
//     //          res.end(index);
//     //          return;
//     //    case '/api' :
//     //         res.setHeader('Content-Type','application/json');
//     //         res.end(JSON.stringify ProductData));
//     //         return;
//     //     default :
//     //          res.end(404 , 'NOT FOUND');   
//     //          res.end();
//     //          return;
//     // }
// })

server.listen(8000 , ()=>{
    console.log('Server is listening at port 8000');
})
