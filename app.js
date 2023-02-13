const insert = require("./model/model");
const express = require("express");
const middleware = require("./middleware/middleware");

const port = 3000;
const app = express();

app.use(express.json());
const routes = require("./routes/route");

app.use("/api", routes);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).send({ error: err.toString() });
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

module.exports = app;
