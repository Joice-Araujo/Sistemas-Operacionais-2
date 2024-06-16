import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly usuarioRepository: Repository<UsuarioEntity>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<UsuarioEntity> {
    const newUser = this.usuarioRepository.create(createUsuarioDto);
    return await this.usuarioRepository.save(newUser);
  }

  async findAll(): Promise<UsuarioEntity[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: number): Promise<UsuarioEntity | undefined> {
    return await this.usuarioRepository.findOne({ where: { id } });
  }

  async update(id: number, usuarioDto: CreateUsuarioDto): Promise<UsuarioEntity | undefined> {
    const usuario = await this.findOne(id);
    if (usuario) {
      usuario.email = usuarioDto.email;
      usuario.senha = usuarioDto.senha; // Não altera a senha, apenas o email
      return await this.usuarioRepository.save(usuario);
    }
    return undefined;
  }

  async remove(id: number): Promise<void> {
    await this.usuarioRepository.delete(id);
  }

  async findOneByEmail(email: string): Promise<UsuarioEntity | undefined> {
    return await this.usuarioRepository.findOne({ where: { email } });
  }
}
