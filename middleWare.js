import express from "express";
const app = express();

function Middle(req, resp, next) {
  console.log(req.url);
  next();
}
app.use(Middle);

app.get("/", (req, resp) => {
  resp.send("this is home page");
});
app.get("/about", (req, resp) => {
  resp.send("this is home page");
});
app.listen(3200)