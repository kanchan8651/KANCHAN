const newsdata = require("./dataset/news");
const express = require("express");
const app = express();
app.get("/", (req, res) => {
  res.send("welcome to my news page");
});
// app.get("/news", (req, res) => {
//   res.send(newsdata);
// });
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  for (let n = 0; n <= newsdata.length; n++) {
    if (newsdata[n].id == id) {
      return res.json(newsdata[n].news);
    }
  }
  return res.json("news not found");
});
app.get("/news", (req, res) => {
  //const limit = req.query.limit;
  //const category = req.query.category;
  // if(limit){
  //   return res.json(newsdata.slice(0,limit));
  // }
  // else if (category){}

  //   const finalnews = [];
  //   for (let i = 0; i < newsdata.length; i++) {
  //     if (newsdata[i].category.toLowerCase() == category.toLowerCase()) {
  //       finalnews.push(newsdata[i].news);
  //     }
  //   }
  //   return res.json(finalnews);
  // } else {
  //   return res.json(newsdata);
  // }1line
  // let result = newsdata;
  // if (category) {
  //   result = result.filter((i) => i.category === category);
  // }
  // if (limit) {
  //   result = result.slice(0, Number(limit));
  // }
  // res.send(result);2line
  const limit = Number(req.query.limit);
  const from = req.query.from;

  let result = newsdata;
  if (limit) {
    if (from === "bottom") {
      result = result.slice(-limit);
    } else {
      result = result.slice(0, limit);
    }
    // result = result.slice(0, Number(limit));
  }
  res.send(result);
});
app.listen(3000);
