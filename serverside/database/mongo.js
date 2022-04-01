const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://parthi:6382811325@cluster0.y5ixw.mongodb.net/myform?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
},()=>{
    console.log("Database connected");
})
module.exports=mongoose;


