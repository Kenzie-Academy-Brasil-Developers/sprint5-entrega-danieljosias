//data-source
import {AppDataSource} from '../data-source'

//entity
import { User } from '../entities/user.entity'

//interfaces
import { IUser } from '../interfaces/user/index'

//libs
import bcrypt from 'bcrypt'

//Error
import { AppError } from '../errors/AppError'

const createUserSevices = async ({ name, email, password, age }:IUser) =>{
    //regras de negócio
    const date = new Date()
    const newDate = date.toUTCString()
    const SplitDate = newDate.slice(0,25)

    const userRepository = AppDataSource.getRepository(User)
    const users = await userRepository.find()
    const emailAlreadyExists = users.find(user => user.email === email)

    if(emailAlreadyExists){
        throw new AppError(400,"Email already exists")
    }

    if(name === undefined || email === undefined || password === undefined || age === undefined){
        throw new AppError(400,"error")
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
    return {id: user.id,name: user.name, email: user.email, age: user.age, created_at: user.created_at, updated_at: user.updated_at}
}

export default createUserSevices