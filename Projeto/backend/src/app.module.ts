import { Module } from '@nestjs/common';
import { SalasModule } from './salas/salas.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuarios/usuarios.module';
import { ImagemModule } from './imagem/imagem.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      database: process.env.DB_DATABASE,
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}']
    }),
    
    
    SalasModule,
    UsuarioModule,
    ImagemModule,
   
   
    
    
    ],
  controllers: [],
  providers: [],
})
export class AppModule {}
