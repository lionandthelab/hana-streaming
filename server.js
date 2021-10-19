const http = require("http");
const express = require("express");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const PORT = 3005;

app.use(cors());

app.get("/hello/:name", (req, res) => {
  var params = req.params;
  res.json({ message: "Hello, " + params.name + "!" });
  //console.log("req : " , req.params);
    console.log("res : " , res.message);
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});