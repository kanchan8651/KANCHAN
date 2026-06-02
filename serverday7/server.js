const express = require("express"); 
const app = express();
const news= [

{ id: 1, category: "sports", news: "India wins cricket series"},

{ id: 2, category: "technology", news: "New AI model launched" },

{ id: 3, category: "business", news: "Stock market rises" },

{ id: 4, category: "sports", news: "Football championship begins" },

{id: 5, category: "technology", news: "New smartphone released" }

];

app.get("/news", (req, res) =>{

const category = req.query.category;

const limit = Number(req.query.limit);

const from = req.query.from;

let result = news;
if (category) {

result = result.filter((i) =>i.category===category);
}

//limit (from top or bottom) if (limit) {
if(limit){
result = from ==="bottom"
? result.slice(-limit)
: result.slice(0, limit);
}
res.send(result);

// GET /news/:id → one article by id app.get("/news/:id", (req, res) { const id = Number(req.params.id); const article = news.find((i) i.id = id); res.send(article);
app.get("/news/:id", (req, res) => { 
const id = Number(req.params.id); 
const article = news.find((i) => i.id === id);
 res.send(article); 
});
app.listen(3000);
