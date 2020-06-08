const express = require("express");
const serveStatic = require("serve-static");

const app = express();

app.use(serveStatic(__dirname + "/dist"));
app.get(/.*/, function(req, res) {
  res.sendfile(__dirname + "/dist/index.html");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("🚀 Started server with success.");
});
