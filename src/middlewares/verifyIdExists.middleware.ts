//Interface do middleware
import { Request, Response, NextFunction } from 'express'

//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'

const verifyIdExists = async (req: Request, res: Response, next: NextFunction) =>{
    const { id } = req.params

    try {
        const userRepository = AppDataSource.getRepository(User)  
        const users = await userRepository.find()
        const isExists = users.find(user => user.id === id)

        if(isExists){
            next()
        }else{
            return res.status(404).send(
                {
                    message: 'User not exists'
                }
            )
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

export default verifyIdExists