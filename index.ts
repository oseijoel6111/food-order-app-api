import express,{Express} from "express";
import "dotenv/config"
import {AdminRoute, VandorRoute} from "./routes"
const port = process.env.PORT

const app:Express = express()

app.use('/admin', AdminRoute)
app.use('/vandor', VandorRoute)

app.listen(port, ()=>{
    console.clear()
    console.log(`Server started on http://localhost:${port}`);
})