//Interface do middleware
import { Request, Response, NextFunction } from 'express'

//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'
import { AppError } from '../errors/AppError'

const verifyIdExists = async (req: Request, res: Response, next: NextFunction) =>{
    const { id } = req.params

    try {
        const userRepository = AppDataSource.getRepository(User)  
        const users = await userRepository.find()
        const isExists = users.find(user => user.id === id)

        if(!isExists){
            throw new AppError(404,"message")
        }else{
            next()
        }
    
    } catch (error) {
        if(error instanceof Error){
            return res.status(404).json({
                error: error,
                message: error.message
            })
        }
    }
}

export default verifyIdExists