const fs = require('fs');
const data = JSON.parse(fs.readFileSync('data.json','utf-8'));
const users = data.users;


exports.Create = ( req, res )=>{
    console.log(req.body);
    const user = req.body;
    users.push(user);
};

exports.Getall = (req,res)=>{
    res.json(users);
};

exports.Read = (req , res)=>{
    const dat = req.body;
    //const id = req.params.id;
    const user = users.find(r=>r.id==dat);
    res.json(user);
};

exports.Replace = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(r=>r.id===id);
    users.splice(userIndex,1,{id:id,...req.body});
    res.status(201).json(users[userIndex]);
};

exports.Update = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(r=>r.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1,{...user,...req.body});
};

exports.delet = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(r=>r.id===id);
    const user = users[userIndex];
    users.splice(userIndex,1);
};
