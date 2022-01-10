const mongoose = require("mongoose");
const articleModel= require("./article");

mongoose.connect("mongodb://localhost:27017/learningMongo",{useNewURLParser: true, useUnifiedTopology: true});

const Article = mongoose.model("Article", articleModel);

//-------------------------------------------------------

//          Save Data
// const artigo = new Article({
//     title: "Ola",
//     author: "Raimundo",
//     body: "opaopaopa",
//     special: true,
//     resume: {
//         title: "ola",
//         author: "Raimundo"
//     }
// })

// artigo.save().thien(()=>{
//     console.log("Artigo Salvo");
// }).catch((err)=>console.log(err));

//-------------------------------------------------------

//          List Data
// Article.find({}).then((articles)=>{
//     console.log(articles)
// }).catch((err)=>console.log(err));

//--------------------------------------------------------

//          List Specific Data
// Article.find({
//  "_id": "53jk45n322p34mk"
// }).then((article)=>{
//     console.log(article)
// }).catch((err)=>console.log(err));

//---------------------------------------------------------

//       Delete Fata
// Article.findByIdAndDelete("53jk45n322p34mk").then((article)=>{
//     console.log(article)
// }).catch((err)=>console.log(err));

//-----------------------------------------------------------

//        Update Data
// Article.findByIdAndUpdate("53jk45n322p34mk", {
//     title:"Ola",
//     author: "Hamiltão"
// }).then((article)=>{
//     console.log("Updated!")
// }).catch((err)=>console.log(err));