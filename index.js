const express = require ("express");
let app = express();
app.use(logger);
app.use(checkPermission)

app.get("/books",(req,res)=>{
    console.log({ route: "/books"});
    res.send({ route: "/books"});
});

app.get("/libraries",(req,res)=>{
    console.log({ route: "/libraries", permission: true});
    res.send({ route: "/libraries", permission: true});
})

app.get("/authors",(req,res)=>{
console.log({ route: "/authors", permission: true})
res.send({ route: "/authors", permission: true});
});

function logger(req,res,next){
    next();
}
function checkPermission(req,res,next){
if(req.path==true){
    res.permission = req.route;
}
next();
}
app.listen(5000,()=>{
    console.log("listen 5000");
})