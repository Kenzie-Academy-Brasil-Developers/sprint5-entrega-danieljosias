import { Request, Response } from "express";
import deleteUserSevices from "../services/deleteUser.services";

const deleteUserController = async (req: Request, res:Response) =>{
    const { id } = req.params

    try {
        //services here
        const user = await deleteUserSevices(id)
            return res.status(200).json({
                message: "message"
            })
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                error: error,
                message: error.message
            })
        }
    }
}

export default deleteUserController