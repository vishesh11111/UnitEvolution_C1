const express = require("express");
const app = express()
app.use(logger)


app.get("/books", (req, res)=>{
    return res.send({route:"/books"})
});

app.get("/libraries",checkPermission("librarian"),(req, res)=>{
    return res.send({ route: "/libraries",permission: req.role})
   });
   
app.get("/authors",checkPermission("authors"),(req, res)=>{
    return res.send({ route: "/authors", permission: req.role})
    
});


function checkPermission(user){
    return function secondlogger(req, res, next){
        if(user === "librarian" ){
            res.permission = true
            return next()
        }
        else if(user === "authors" ){
            res.permission = true
            return next()
        }
        else{
            return res.send("user is on wrong path")
        }
    }
}

function logger(req, res, next){
    if(req.path === "/books"){
        return next()
    }  
    else if(req.path === "/libraries"){
        req.role = true;
        return next()
    }  
    else if(req.path === "/authors"){
        req.role = "Not allowed";
       return next()
    }
    else{
        return res.send("your path is worng")
    }
    
};

app.listen(5000, ()=>{
    console.log("pop 5000 name")
});
