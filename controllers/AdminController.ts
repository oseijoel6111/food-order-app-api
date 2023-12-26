import { Request, Response, NextFunction } from "express"

export const CreateVandor = async (req: Request, res: Response, next: NextFunction) => {
    res.send('Create admin create')
}

export const AdminIndex =async (req:Request, res:Response, next:NextFunction) => {
    res.send('Index Admin')
}

export const GetVandors =async (req:Request, res:Response, next:NextFunction) => {
    res.send('vandors')
}

export const GetVandorById = async (req:Request, res:Response, next:NextFunction) => {
    res.send('vandor by ID')
}