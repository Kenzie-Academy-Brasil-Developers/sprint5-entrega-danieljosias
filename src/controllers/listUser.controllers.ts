import { Request, Response } from "express";
import listUserSevices from "../services/listUser.services";

const listUserController = async (req: Request, res:Response) =>{
    try {
        const user = await listUserSevices()
        return res.status(200).json(user)
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default listUserController