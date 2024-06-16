import { Module } from '@nestjs/common';
import { ImagemService } from './imagem.service';
import { ImagemController } from './imagem.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImagemEntity } from './entities/imagem.entity';

@Module({
  controllers: [ImagemController],
  providers: [ImagemService],
  imports: [TypeOrmModule.forFeature([ImagemEntity])]
})
export class ImagemModule {}