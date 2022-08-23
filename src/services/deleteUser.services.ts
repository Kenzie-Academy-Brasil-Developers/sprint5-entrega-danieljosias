//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'
import { AppError } from '../errors/AppError'

const deleteUserSevices = async (id: string) =>{
    //regras de negócio 
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const deleteAccount = users.find(user => user.id === id)

    if(deleteAccount === undefined){
        throw new AppError(404,"message")
    }
    
    await userRepository.delete(deleteAccount!.id)
    return true
}

export default deleteUserSevices