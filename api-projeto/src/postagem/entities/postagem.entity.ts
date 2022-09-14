import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/tema/entities/tema.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name:'tb_postagem'})
export class Postagem{
   
    @PrimaryGeneratedColumn()
    id: number
    
    @IsNotEmpty()
    @MaxLength(1000)
    @Column({nullable: false, length: 1000})
    descricao: string

    @Column()
    imagem: string 


    // @ManyToOne(() => Tema, (tema) => tema.postagem,{
    //     onDelete: "CASCADE"
    // })
    // tema: Tema
}