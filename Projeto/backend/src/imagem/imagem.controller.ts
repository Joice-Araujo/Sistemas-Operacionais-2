import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, Req, UploadedFile, StreamableFile } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { FileInterceptor } from '@nestjs/platform-express';
import multerConfig from './multer-config';
import { Request } from 'express';
import * as fs from 'fs';
import { join } from 'path';

@Controller('imagem')
export class ImagemController {
  constructor(private readonly imagemService: ImagemService) {}

  @Post('upload/:id')
  @UseInterceptors(FileInterceptor('file', multerConfig))
  create(
    @Param('id') id: number,
    @Req() req: Request,
    @UploadedFile() imagem: Express.Multer.File
  ) {
    return this.imagemService.create(req, id, imagem);
  }

  @Get(':id/:nomeImagem')
  findOne(@Param('id') id: number, @Param('nomeImagem') nomeImagem: String) {
    const imagem : fs.ReadStream = fs.createReadStream(join (process.cwd(), `imagens/${id}/${nomeImagem}`))
    return new StreamableFile(imagem);
  }
//mudar rota para url
}