const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const { response } = require("express");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  return
});

app.get("/api/fortune", (req, res) => {
  const fortune = ["The truly generous share, even with the undeserving", 
  "Savor your freedom, it is precious", 
  "It's not the amount of time you devote, but what you devote to the time that counts.", 
  "Your success will astonish everyone.",
  "Each day, compel yourself to do something you would rather not do.",]


let randomIndex = Math.floor(Math.random() * fortune.length)
let randomFortune = fortune[randomIndex]

res.status(200).send(randomFortune)
return
})

const users = []
let globalId = 1
app.post("/api/register", (req, res) => {
  console.log("Registering User")
  // console.log(req.body)
  let {firstName, lastName, email} = req.body
  let newUser = {
    id: globalId,
    firstName,
    lastName,
    email
  }
  users.push(newUser)
  console.log(newUser)
  console.log(users)
  res.status(200).send(newUser)
  
  globalId++
  return
})

let goals = []
let count = 0

app.post("/api/goals", (req, res) => {
  console.log("Creating goals")
  // console.log(req.body)
  //returning an object with key: value of goal: 'run'
  const {goal} = req.body
  newGoal = {
    id: count,
    goal: goal}
  goals.push(newGoal)
  res.status(200).send(newGoal)
  console.log(newGoal)
  console.log(goals)
  count++
  return
})

// app.put("api/register/:id", (req, res) => {
//   let existingid = req.params.id
//   let index = users.findIndex(elem => elem.id === id)
//   for(let i = 0; i < users.length; i++) {
//     if(users[i].firstName === existing){
//       users[index].firstName = req.body.firstName
//       users[index].lastName = req.body.lastName
//       users[index].email = req.body.email
//       res.status(200).send("User updated.")
//       return
//     } else if (users[i].lastName === existingUserInfo) {
//       users[i].firstName = req.body.firstName
//       users[i].lastName = req.body.lastName
//       users[i].email = req.body.email
//       res.status(200).send("User updated.")
//       return
//     } else if (users[i].email === existingUserInfo) {
//       users[i] = newUserInfo
//       res.status(200).send("User updated")
//       return
//     }
//   }
//   res.status(400).send("User not found.")
// })
app.put("/api/register/:id", (req, res) => {
  console.log("Changing User Info")
  let {id} = req.params
  let {firstName, lastName, email} = req.body
  let index = users.findIndex(elem => elem.id === +id)

  if (users[index].firstName === id) {
    users[index].lastName = lastName
    users[index].email = email
    res.status(200).send("User updated")
  } else if (users[index].lastName === id) {
    users[index].firstName = firstName
    users[index].email = email
    // res.status(200).send("User updated")
  } else if (users[index].email === id) {
    users[index].firstName = firstName
    users[index].lastName = lastName
    // res.status(200).send("User updated")
  } else {
    res.status(400).send("error")
    return
  }
  res.status(200).send(users[index])
  return
})

app.delete("/api/register/:id", (req, res) => {
  let index = users.findIndex(elem => elem.id === +req.params.id)
  users.splice(index, 1)
  res.status(200).send("User deleted.")
})

app.listen(4000, () => console.log("Server running on 4000"));