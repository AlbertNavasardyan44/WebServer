const express=require('express');
const mongoose = require("mongoose");

const app=express();
const ejs=require('ejs');
const PORT=process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use( express.static( "views" ) );
//const Person = require("./Models/Person")
const uri = process.env.MONGODB_URI;
mongoose
.connect(
   ' mongodb+srv://albertdb:albertdb449@cluster0.wyknk.mongodb.net/sampletest?retryWrites=true&w=majority',
   {
       useNewUrlParser:true,
   }
   )
   .then(()=>console.log('mongodb conected'))
   .catch(err=>console.log(err));


const UsersSchema=new mongoose.Schema({
    imgname: {
       type: String,
        required : true,
    }
});
   app.get('/', (req, res) => {
          Users.create({
              imgname:'2.jpg', 
          })

        .then((users) => res.send(users))
        .catch((err )=> res.send(err));
   
});

const Users=mongoose.model('Users', UsersSchema);
  
app.get('/',(req, res)=>{
    Users.find({},function(err,users){
        res.render('index',{
            imageslist:users
        })
    })
})

// const { DB_CONNECTION_STRING } = process.env

// mongoose.connect(DB_CONNECTION_STRING)
// const db = mongoose.connection




app.listen(PORT,()=>{
    console.log('server has been started...')
})