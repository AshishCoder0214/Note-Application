const express =require("express")
const notesRoutes=require("./routes/notesRoutes");
const connectDB=require("./config/db");
const dotenv=require("dotenv")


dotenv.config();


const app=express()
const PORT=process.env.PORT || 5001


//middleware
app.use(express.json())
app.use(rateLimiter)

// this is my custom middleware
// app.use((req,res,next)=>{
//     console.log("We just got a new req");
//     next();
// })

app.use((req,res,next)=>{
    console.log(`Req method is ${req.method} &Req URL is${req.url}`);
    next();
})

app.use("/api/notes",notesRoutes);
connectDB().then(()=>{
app.listen(PORT,()=>{
    console.log("Server started on PORT:",PORT);
});
})


