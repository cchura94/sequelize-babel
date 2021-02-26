import express from "express";
//const express = require("express")

const app = express();

app.get("/", function(req, res){
    res.send("Hola Mundo");
});

app.get("/prueba", function(req, res){
    res.send("Hola Mundo Prueba");
});


app.listen(3000, ()=>{
    console.log("Servidor Levantado");
})