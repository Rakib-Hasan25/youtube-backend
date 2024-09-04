import express from 'express';
import cors from 'cors';
import userRouter from "./routes/users.route.js"
// import cookieParser from"cookie-parser"

const app = express()

app.use(cors({
    origin : "*",
    credentials:true
}
))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended:true, limit:"16kb" }))
app.use(express.static("public"));






// app.use(cookieParser())
// app.post("/api/v1/users/register",(req,res)=>{
    //    res.send("sff")
    // }) 
    // app.post("/api/v1/users/login"),(req,res)=>{
        //  res.send("fsdfasdf")
        // }
        
        // app.post("/api/v1/videos/upload"),(req,res)=>{
            
            // }
            
            
            
            // routes
            // import videoRouter from "./routes/video.route.js"
            // import subcriptionRouter from "./routes/subscription.route.js"
            // import commentsRouter from "./routes/comment.route.js"
            
            
            
            
            
            
            
            
            app.use("/api/v1/users",userRouter)
            // app.use("/api/v1/video",videoRouter)
            // app.use("/api/v1/subcription",subcriptionRouter)
            // app.use("api/v1/comments",commentsRouter)
            
            
            export default app