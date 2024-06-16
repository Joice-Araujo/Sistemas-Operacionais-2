import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { ImagemEntity } from './entities/imagem.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ImagemService {
  constructor(
    @InjectRepository(ImagemEntity)
    readonly imagemRepository : Repository<ImagemEntity>
  ){}
  async create(req: Request, idSala: number, imagem: Express.Multer.File) {
    const novaImagem : ImagemEntity = new ImagemEntity()
    novaImagem.idSala = idSala
    novaImagem.nomeImagem = imagem.filename
    novaImagem.tipoArquivo = imagem.mimetype
    novaImagem.tamanhoArquivo = imagem.size
    novaImagem.url = `${req.protocol}://${req.get('host')}/imagem/${req.params.id}/${imagem.filename}`
    return await this.imagemRepository.save(novaImagem);
  }

  
}