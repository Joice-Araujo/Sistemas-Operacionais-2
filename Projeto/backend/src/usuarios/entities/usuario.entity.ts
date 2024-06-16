import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuario'})
export class UsuarioEntity {
    @PrimaryGeneratedColumn('increment')
    id: number 

    @Column()
    email: string

    @Column()
    senha: string
}