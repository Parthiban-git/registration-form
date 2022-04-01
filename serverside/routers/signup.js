const express=require('express')
require('../database/mongo')
const signuprouter=new express.Router()
const User=require('../schema/signup')

signuprouter.post("/signup",async(req,res)=>{   

    let { name , email , password , number , sex , department , skills } = req.body;
    console.log("email",email);
    try{
        console.log("enreting")
        await User.findOne({email}).then((res)=>{
            console.log(res);

        })
        // if(res==null){
        //     await User.insertMany({
        //         name,email,password,number,sex,department,skills
        //     }).then(()=>{
        //         res.status(200).send("Inserted")
        //     })
        // }
    }
    catch(error){
        console.log("catch")
        return res.status(400).send(error);
    }
})

module.exports=signuprouter