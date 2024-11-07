import dotenv from "dotenv"
dotenv.config()


export const port = process.env.PORT
export const db_url = process.env.MONGO_URI
