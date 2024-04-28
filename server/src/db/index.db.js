import mongoose from "mongoose"
import  {DB_NAME}  from "../constants.js";


const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    console.log(` MONGODB Connected !! DB Host:${conectionInstance.connection.host}`)
} catch (error) {
    console.log(`MONGODB Connection failed: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB

