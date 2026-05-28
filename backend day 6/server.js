const express = require("express");
const newsdata = require("./dataset/news");
//console.log(newsdata);
const app = express();
app.get("/news", (req, res) => {
  const limit = req.query.limit;
  const category = req.query.category;
  if (limit) {
    return res.json(newsdata.slice(0, limit));
  } else if (category) {
    const finalnews = [];
    for (let i = 0; i < newsdata.length; i++) {
      if (newsdata[i].category == category) {
        finalnews.push(newsdata[i].news);
      }
    }
    return res.json(finalnews);
  } else {
    return res.json(newsdata);
  }
});
app.get("/allnews", (req, res) => {
  res.json(newsdata);
});
app.get("/allnews/:id", (req, res) => {
  const id = req.params.id;
  for (let n = 0; n <= newsdata.length; n++) {
    if (newsdata[n].id == id) return res.json(newsdata[n].news);
  }
});
app.listen(3000, () => {
  // console.log("server running an localhost:3000 ");
});
