var express = require('express');
var router = express.Router();
const db = require("../db");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/save",async(req,res)=>{
  const cliente = req.body;
  const resultado = await db.insert(cliente);
  console.log(resultado);
  res.json(resultado);

})

module.exports = router;
