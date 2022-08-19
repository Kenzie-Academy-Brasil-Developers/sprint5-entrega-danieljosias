//data-source
import AppDataSource from '../data-source'

//entity
import { User } from '../entities/user.entity'

//interfaces
import { IUser } from '../interfaces/user/index'

//libs
import bcrypt from 'bcrypt'

const createUserSevices = async ({ name, email, password, age }:IUser) =>{
    //regras de negócio
    const date = new Date()
    const newDate = date.toUTCString()
    const SplitDate = newDate.slice(0,25)

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const emailAlreadyExists = users.find(()=> user.email === email)

    if(emailAlreadyExists){
        throw new Error('Email already exists') 
    }

    const user = new User()
    user.name = name
    user.email = email
    user.password = bcrypt.hashSync( password, 10 )
    user.age = age
    user.created_at = SplitDate
    user.updated_at = SplitDate
    
    userRepository.create(user)
    await userRepository.save(user)

    return user
}

export default createUserSevices