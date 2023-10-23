const lg = require('../model/Login');
const mongoose = require('mongoose');
const datas = lg.logins;

exports.create = async( req , res ) => {
    const info = new datas(req.body);
    const values = await datas.find();
    if( values.find(val =>val.Email === info.Email) ){
           res.status(203).json("Already Exist");
            console.log("already Exist");
    }else{
        info.save()
        .then(doc=>{
            console.log({doc});
            res.json(doc);
        })
        .catch(err=>{
            console.log("this is"+err._message)
            if(err._message=="logins validation failed"){
                res.status(202).json("Error saving login to database");
            }else
               res.status(500).send("Error saving login to database");
        });
    }
}

exports.check = async( req , res ) => {
    const cred = new datas(req.body);
    const info = await datas.find();

    if(info.find(p =>( p.Email === cred.Email && p.Password === cred.Password ))){
            res.status(200)
            .json("success")
            console.log("present");
        } 
        else{
            res.status(203).json("wrong");
            console.log("wrong password");
        }

}
