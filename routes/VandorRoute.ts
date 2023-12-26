import express,{Router, Request, Response} from "express"
const app:Router = express.Router()

app.get('/', (req:Request, res:Response)=>{
    res.send('Vandor section')
})

export { app as VandorRoute };