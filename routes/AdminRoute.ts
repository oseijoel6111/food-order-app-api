import express,{ Router, Request, Response } from "express";
import {CreateVandor,AdminIndex,GetVandors} from "../controllers"
const app:Router = express.Router()

app.get('/', AdminIndex)
app.post('/vandor', CreateVandor)
app.get('vandors', GetVandors)
app.get('vandors/:id', )

export {app as AdminRoute}