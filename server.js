var express = require("express")
var transmog = require("./server/config/routes")
var app = express();
var path = require("path");
app.use(express.static(path.join(__dirname+"/client/dist/client")))

transmog(app)

app.all("**", (req,res,next) => {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
})