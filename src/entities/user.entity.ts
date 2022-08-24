import { Entity, Column, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity()
export class User{
    @PrimaryColumn('uuid')
    readonly id: string

    @Column({ nullable: true })
    name: string
    

    @Column({ nullable: true })
    email: string

    @Column({ nullable: true })
    password: string

    @Column({ nullable: true })
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