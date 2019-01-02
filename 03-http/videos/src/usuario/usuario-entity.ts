

// usuario-entity.ts

import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity('db_usuario')
export class UsuarioEntity{

    @PrimaryGeneratedColumn()
    id: number;

    @Column(
        {
            name:'nombre_primero',
            type:'varchar',
            length: 50
        }
    )
    nombrePrimero:string;

    @Column()
    biografia:string;


}