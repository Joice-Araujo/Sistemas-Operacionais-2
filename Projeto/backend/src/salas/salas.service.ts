import { HttpCode, Injectable } from '@nestjs/common';
import { CreateSalaDto } from './dto/create-sala.dto';
import { SalaEntity } from './entities/sala.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ImagemEntity } from 'src/imagem/entities/imagem.entity';


@Injectable()
export class SalasService {
  constructor(
    @InjectRepository(SalaEntity)
    private readonly salaRepository: Repository<SalaEntity>,

  ) { }


  async create(createSalaDto: CreateSalaDto) {
    return this.salaRepository.save(createSalaDto);
  }


  async findAll(): Promise<SalaEntity[]> {
    const quary: string = `SELECT s.id, s.nomeSala, s.local, s.dataUso, s.horaInicio, s.horaFinal, 
       s.responsavel, s.convidados, s.motivo, im.url, im.nomeImagem 
      FROM sala_entity s
      LEFT JOIN imagem im ON im.id = (
    SELECT MIN(id)
    FROM imagem
    WHERE idSalaId = s.id);`
    return await this.salaRepository.query(quary);
  }


  findOne(id: number) {
    return this.salaRepository.findOneBy({ id: id });
  }

  async update(id: number, updateSalaDto: CreateSalaDto) {
    const sala = new SalaEntity();
    sala.nomeSala = updateSalaDto.nomeSala;
    sala.local = updateSalaDto.local;
    sala.dataUso = updateSalaDto.dataUso;
    sala.horaInicio = updateSalaDto.horaInicio;
    sala.horaFinal = updateSalaDto.horaFinal;
    sala.responsavel = updateSalaDto.responsavel;
    sala.motivo = updateSalaDto.motivo;
    sala.convidados = updateSalaDto.convidados;


    return await this.salaRepository.update(id, sala);
  }

  async remove(id: number) {
    return await this.salaRepository.delete({ id: id });
  }

}
