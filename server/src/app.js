import express from "express"
import helmet from "helmet"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(helmet())
app.use(cors())
app.use(express.json({limit:'16kb'}))
app.use(express.urlencoded({extended:true,limit:'16kb'}))
app.use(express.static('public'))
app.use(cookieParser())


//Router decelaration 
app.get("/",(req,res)=>{
    res.send("Hello World")
})

export default app

