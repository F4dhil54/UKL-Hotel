const express = require("express");
const bodyparser = require("body-parser")
const app = express();
const cors = require("cors")
const connection = require('./connection')
const PORT = 8009;
app.use(bodyparser.urlencoded({extended: false}))
app.use(bodyparser.json())
app.use(cors());

app.post("/Bebas1", (req, res) => {
    const Bebas1 = {
      Bebas1: req.body.Bebas1,
    };
  
    connection.query('INSERT INTO bebaslagi SET ?', Bebas1, function(error, results, fields) {
      if (error) throw error;
      res.json({ message: 'Bebas1 created', Bebas1 });
    });
  });
  

  app.listen(PORT, () => {
    console.log(`Server of School's Library runs on port ${PORT}`)
}) 