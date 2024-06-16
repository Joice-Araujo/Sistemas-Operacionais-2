
import { SalaEntity } from "src/salas/entities/sala.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'imagem'})
export class ImagemEntity {

    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    nomeImagem: String

    @Column()
    tipoArquivo: String

    @Column()
    tamanhoArquivo: number

    @Column()
    url: String

     @ManyToOne(()=> SalaEntity, (sala)=> sala.imagens)
     idSala: number
    

}