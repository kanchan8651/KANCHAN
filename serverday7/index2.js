// const newsdata = require("./dataset/news");
// const express = require("express");
// const app = express();
// app.get("/", (req, res) => {
//   res.send("welcome to my news page");
// });
// // app.get("/news", (req, res) => {
// //   res.send(newsdata);
// // });
// app.get("/news/:id", (req, res) => {
//   const id = req.params.id;
//   for (let n = 0; n <= newsdata.length; n++) {
//     if (newsdata[n].id == id) {
//       return res.json(newsdata[n].news);
//     }
//   }
//   return res.json("news not found");
// });
// app.get("/news", (req, res) => {
//   const limit = req.query.limit;
//   const category = req.query.category;

//   let result = newsdata;

//   if (category) {
//     result = result.filter(
//       (item) => item.category.toLowerCase() === category.toLowerCase(),
//     );
//   }

//   if (limit) {
//     result = result.slice(0, Number(limit));
//   }

//   res.json(result);
// });
// app.listen(3000);
