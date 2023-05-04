const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});
connection.connect();
app.use(bodyParser.urlencoded({extended: true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/form.html");
});
app.post("/", function(req,res){
    const { login, password } = req.body;
    connection.query("select login, password from users",(err, rows) => {
        if (err) throw err
            for(let i=0;i<rows.length;i++){
                if(rows[i].login==login && rows[i].password==password){
                    res.send("udało ci się zalogować, witamy"+login);
                }
                else{
                    res.send("błędnie wpisany login lub hasło");
                }
           };
           connection.end();
    });
});
app.listen(3000,function(){
    console.log("server started on port 3000");
});
