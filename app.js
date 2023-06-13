const path = require("path") 
const express = require ("express")
const app = express ()
app.use(express.static('public'));
app.get( '/', function(req, res) {
    res.sendFile(path.join(__dirname, "views/index.html"))    
}
) 
app.get( '/login', function(req, res) {
  res.sendFile(path.join(__dirname, "views/login.html"))    
}
)
app.listen(3001, () => {
    console.log('http://localhost:'+3001);
  });
  