const express=require('express')
const app=express()

const cors=require('cors')

const port=process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const signup=require('./routers/signup');

app.use(signup);

app.listen(port,()=>{
    console.log(`port running on ${port}`)
})