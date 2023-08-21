const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/User')
const bcrypt = require('bcryptjs');
const connectToMongo = require('./db')



app.use(express.json())
// body parser to parse json data

// app.use(cors({
//   credentials:true,
//   origin:'http://127.0.0.1:5173'
// })) ;
app.use(cors())
const salt = bcrypt.genSaltSync(10);

connectToMongo();
app.get('/', (req, res) => {
  res.send('hello world')

})

app.post('/signup',async(req,res)=>{
  const {name,email,password} = req.body;
  try {
    var userDoc = await User.create({
      name,
      email,
      password:bcrypt.hashSync(password,salt),
    })
    // res.json({name,email,password});
       res.json(userDoc);
  }
  
  
 catch (error) {
    console.error(error.message);
    res.status(422).send("some error occured");
  }
});

app.post('/login',async(req,res)=>{
  const {email,password} = req.body;
  const userDoc= await User.findOne({email});
  if(userDoc){
    const passOK = await bcrypt.compare(password,userDoc.password)
    if (passOK) {
      res.json('password ok')
    } else {
      res.status(422).json('pass not ok')
    }
  }
  else {
    res.json('User not found');
  }
})
 
app.listen(4000,() => {
  console.log(`Example app listening on port 4000`)})
