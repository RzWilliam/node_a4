const PKM = require('../models/PkmModel');
const jwt = require("jsonwebtoken");
const SECRET = "mykey";

exports.create = (req, res) =>{
    console.log(req.body);
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level
    });
    pkm.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.findAll = (req, res) => {
    PKM.find()
        .then(pkms => {
            res.send(pkms);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

exports.deleteOne = (req,res )=>{
    console.log('delete test')
    PKM.findOneAndRemove({_id:req.params.id})
    .then(()=>res.status(200).json('delete'))
    .catch(error=>res.status(400).json({error}))
}

exports.updateOne = (req,res,next)=>{
    console.log('update test')
    PKM.findOneAndUpdate({_id:req.params.id},{...req.body})
    .then(()=>res.status(200).json(('update')))
    .catch(error=>res.status(400).json({error}))
}