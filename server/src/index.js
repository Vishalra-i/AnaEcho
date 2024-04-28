
import connectDB from "./db/index.db.js"
import app from "./app.js"


const PORT = process.env.PORT || 3333

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on Port: http://localhost:${process.env.PORT}`)
    })
}).catch(err => console.log(`MongoDB Connection Failed:: ${err}`))


