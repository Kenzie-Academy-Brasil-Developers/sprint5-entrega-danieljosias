//AppDataSource
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'

//interfaces
import {IUser} from '../interfaces/user/index'

//libs
import bcrypt from 'bcrypt'


const updateUserSevices = async ({ name, email, password, age }:IUser, id:string) => {
    //regras de negócios
    const date = new Date()
    const newDate = date.toUTCString()
    const SplitDate = newDate.slice(0,25)

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync(password,10)
    user.age = age
    user.created_at = SplitDate
    user.updated_at = SplitDate

    userRepository.update(id, {name: user.name, email: user.email, password: user.password, age: user.age, created_at: user.created_at, updated_at: user.updated_at})
    await userRepository.save(user)

    return user
}   

export default updateUserSevices