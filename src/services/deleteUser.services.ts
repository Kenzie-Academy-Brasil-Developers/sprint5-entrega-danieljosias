//AppDataSource
import AppDataSource from '../data-source'

//entity
import { User } from '../entities/user.entity'

const deleteUserSevices = async (id: string) =>{
    //regras de negócio 
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const deleteAccount = users.find(user => user.id === id)

    if(!deleteAccount){
        return {message: 'User not exists'}
    }
    
    await userRepository.delete(deleteAccount!.id)
    return false
}

export default deleteUserSevices