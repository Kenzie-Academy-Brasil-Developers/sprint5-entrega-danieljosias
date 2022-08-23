import { Request, Response } from "express";
import createUserSevices from "../services/createUser.services";

const userCreateController = async (req: Request, res:Response) =>{

    try {
        //services here
        const { name, email, password, age } = req.body
        const user = await createUserSevices({ name, email, password, age })
        return res.status(201).json(user)

    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({
                "error": error.name,
                "message": error.message
            })
        }
    }
}

export default userCreateController