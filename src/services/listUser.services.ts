//AppDataSource
import AppDataSource from '../data-source'

//entity
import { User } from '../entities/user.entity'

const listUserSevices = async () =>{
    //regras de negócio
    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    return users
}

export default listUserSevices