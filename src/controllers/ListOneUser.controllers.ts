import { Request, Response } from "express";
import listOneUserSevices from "../services/listOneUser.servives";

const listOneUserController = async (req: Request, res:Response) =>{
    const { id } = req.params

    try {
        const user = await listOneUserSevices(id)
        return res.status(200).json(user)

    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                error: error,
                message: error.message
            })
        }
    }
}

export default listOneUserController