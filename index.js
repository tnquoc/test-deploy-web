var express = require("express")
var envConfig = require('dotenv')

const app = express();
envConfig.config()

const PORT = process.env.PORT || 3000;

app.get("", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listens at port ${PORT}`);
})