const express=require("express");
const app=express();

const request=require("request");

app.get("/",function(req,res){
    request.get("http://localhost:9222/json/list",function(err,resp,body){
        
        res.render("index.ejs",{data:JSON.parse(body)});
    });
});

app.listen(8000,function(){
    console.log("app started");
});