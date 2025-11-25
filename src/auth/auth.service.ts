import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { UserEntity } from 'src/common/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepo: Repository<UserEntity>,
  ) {}

  async register(dto: RegisterDto) {
    const exists = await this.usersRepo.findOne({ where: { email: dto.email } });
    if (exists) throw new UnauthorizedException('User already exists');

    const user = this.usersRepo.create({
      email: dto.email,
      fullname: dto.fullname,
      passwordHash: await bcrypt.hash(dto.password, 10),
    });

    await this.usersRepo.save(user);

    return this.generateResponse(user);
  }

  async login(dto: LoginDto) {
    const user = await this.usersRepo.findOne({ where: { email: dto.email } });
    if (!user) throw new UnauthorizedException('Invalid credentials');

    const isValid = await bcrypt.compare(dto.password, user.passwordHash);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    return this.generateResponse(user);
  }

  async me(id: string) {
    return this.usersRepo.findOne({ where: { id } });
  }

  private generateResponse(user: UserEntity) {
    const token = jwt.sign(
      { sub: user.id },
      process.env.JWT_SECRET || 'dev_secret',
      { expiresIn: '7d' },
    );

    return {
      token,
      user: {
        id: user.id,
        email: user.email,
        fullname: user.fullname,
      },
    };
  }
}
