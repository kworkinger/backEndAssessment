const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt")

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

})

const users = []
app.post("/api/register", (req, res) => {
  console.log("Registering User")
  const {firstName, lastName, email} = req.body
  let newUser = {
    firstName,
    lastName,
    email
  }
  users.push(newUser)
  console.log(users)
  res.status(200).send("Information secured, thank you for joining!")
})

app.listen(4000, () => console.log("Server running on 4000"));
