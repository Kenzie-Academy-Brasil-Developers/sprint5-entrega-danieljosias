//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'
import { AppError } from '../errors/AppError'

const listOneUserSevices = async (id: string) =>{

    //regras de negócio
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const account = users.find(user => user.id === id)
    
    if(!account){
        throw new AppError(404,"message")
    }

    return account
}

export default listOneUserSevices