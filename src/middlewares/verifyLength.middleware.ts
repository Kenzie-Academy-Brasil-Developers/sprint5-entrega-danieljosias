//Interface do middleware
import { Request, Response, NextFunction } from 'express'

//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'

const verifyLength = async (req: Request, res: Response, next: NextFunction) =>{

    try {
        const userRepository = AppDataSource.getRepository(User)  
        const users = await userRepository.find()

        if(users.length < 3){
            next()
        }
    
    } catch (error) {
        if(error instanceof Error){
            return res.status(400).send({
                "error": error.name,
                "message": 'error.message'
            })
        }
    }
}

export default verifyLength