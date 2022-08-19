import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class User{
    @PrimaryColumn('uuid')
    readonly id: string

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    age: number

    @Column()
    created_at: string

    @Column()
    updated_at: string

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}