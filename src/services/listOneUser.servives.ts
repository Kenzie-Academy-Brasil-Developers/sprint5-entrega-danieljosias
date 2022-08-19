//AppDataSource
import AppDataSource from '../data-source'

//entity
import { User } from '../entities/user.entity'

const listOneUserSevices = async (id: string) =>{

    //regras de negócio
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const account = users.find(user => user.id === id)
    
    return account
}

export default listOneUserSevices