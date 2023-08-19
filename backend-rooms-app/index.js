const express = require('express')
const app = express()
const cors = require('cors')

app.use(express.json())
// body parser to parse json data

// app.use(cors({
//   credentials:true,
//   origin:'http://127.0.0.1:5173'
// })) ;
app.use(cors())
app.get('/', (req, res) => {
  res.send('hello world')
})

app.post('/signup',(req,res)=>{
  const {name,email,password} = req.body;
  res.json({name,email,password});
})

app.listen(4000)
