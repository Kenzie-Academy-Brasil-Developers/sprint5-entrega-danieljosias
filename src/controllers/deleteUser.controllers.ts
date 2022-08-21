import { Request, Response } from "express";
import deleteUserSevices from "../services/deleteUser.services";

const deleteUserController = async (req: Request, res:Response) =>{
    const { id } = req.params

    try {
        //services here
        const user = await deleteUserSevices(id)

        if(user === true){
            return res.status(404).json({
                message: 'User not exists'
            })
        }else{
            return res.status(200).json({
                messsage: 'User deleted',
                user: user
            })
        }
        
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default deleteUserController