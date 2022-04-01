const mongoose=require('mongoose')
const schema=mongoose.Schema
const validator=require('validator')

const userschema=new schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email Invalid")
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    sex:{
        type:String,
    },
    department:{
        type:String
    },
    skills:{
        type:String
    }   
})
const mong=mongoose.model('registrations',userschema)

module.exports=mong
