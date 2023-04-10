const express = require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const PORT=3000;

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/',function(req,res){
   res.send("Hello From Node Server")
})

app.listen(PORT,function(){
    console.log("Surver Runing on Port"+PORT);
})

let users = [];

app.post('/enroll',function(req,res){
    console.log(req.body);
    let user = req.body;
    users.push(user);
    console.log(users)
    res.status(200).send({"data":"Recived Successfully"});
})


// *************************** Local Storage Code ****************************


// app.post('/enroll',function(req,res){

//     let user = req.body;

//   // Check if user already exists
//   const userExists = users.find(userData => userData.userName === user.userName);
//   if (userExists) {
//     return res.status(400).json({ message: 'Username already taken' });
//   }

//   users.push(user);
//   localStorage.setItem('users', JSON.stringify(users));
//   console.log(users)
//   res.status(201).json({ message: 'User registered successfully' });
// })


app.post('/login', (req, res) => {
    let userLogin= req.body;
    //const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.userName === userLogin.userName && u.password === userLogin.password);
    if (user) {
      res.json({ message: `Welcome, ${userLogin.userName}!` });
    } else {
        console.log(" Not Found User ")
      res.status(401).json({ message: 'Invalid username or password' });
    }
  });



// app.post('/login', (req, res) => {
//     console.log(req.body);
//     const { username, password } = req.body;
//     //const users = JSON.parse(localStorage.getItem('users'));
//     const user = users.find((u) => u.username === username && u.password === password);
  
//     if (user) {
//       res.json({ message: `Welcome, ${username}!` });
//     } else {
//         console.log(" Not Found User ")
//       res.status(401).json({ message: 'Invalid username or password' });
//     }
//   });