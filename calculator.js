const express=require("express");
const bodyParser=require("body-parser");



const app=express();
app.use(bodyParser.urlencoded({extended:true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){

  var num1=Number(req.body.num1);
  var num2=Number(req.body.num2);
  var result=num1+num2;
  res.send("Result is "+result);
});

app.get("/bmicalculator", function(req,res){
 res.sendFile(__dirname+"/bmiCalculator.html");

});

app.post("/bmiCalculator",function(req,res){
  var wt=parseFloat(req.body.weight);
  var ht=parseFloat(req.body.height);

  var bmi=wt/(ht*ht);
  res.send("<h1>Your Bmi is </h1> "+bmi);
})

app.listen(3000, function(){
  console.log("server has started at port 3000");
});
