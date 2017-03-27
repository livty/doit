var express = require("express"),
app = express(),
bodyParser = require("body-parser"),
mongoose = require("mongoose"),
methodOverride = require("method-override");

//app conf
mongoose.connect("mongodb://localhost/do_it");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));

//schema conf
var choreSchema = new mongoose.Schema({
    day: String,
    image: String,
    title:String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Chore = mongoose.model("Chore", choreSchema);

//routes
app.get("/", function(req,res){
    res.redirect("/chores");
});

app.get("/chores", function(req,res){
    Chore.find({}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("index", {chores: chores});
        }
    });
});

//new route
app.get("/chores/new", function(req,res){
    res.render("new");
});
app.post("/chores", function(req,res){
    Chore.create(req.body.chore, function(err, newChore){
        if(err){
            res.render("new");
        }else{
            res.redirect("/chores");
        }
    });
});

app.get("/chores/day/Sa",function(req,res){
    Chore.find({day:"AF"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/Su",function(req,res){
    Chore.find({day:"Su"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/Mo",function(req,res){
    Chore.find({day:"Mo"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/Tu",function(req,res){
    Chore.find({day:"Tu"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/We",function(req,res){
    Chore.find({day:"We"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/Th",function(req,res){
    Chore.find({day:"Th"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});
app.get("/chores/day/Fr",function(req,res){
    Chore.find({day:"Fr"}, function(err, chores){
        if(err){
            console.log(err);
        }else{
            res.render("sa",{chores: chores});
        }
    });
});



app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Just do it! is served");
});