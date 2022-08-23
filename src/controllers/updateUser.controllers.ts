import { Request, Response } from "express";
import updateUserSevices from "../services/updateUser.services";

const updateUserController = async (req: Request, res:Response) =>{
    const { name, email, password, age }  = req.body
    const { id } = req.params
    try {
        const user = await updateUserSevices({ name, email, password, age },id)
        return res.status(200).json({
            message: "message",
            user: user
        })

    } catch (error) {
        if(error instanceof Error){
            return res.status(404).send({
                "error": error,
                "message": error.message
            })
        }
    }
}

export default updateUserController