import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  canActivate(ctx: ExecutionContext): boolean {
    const req = ctx.switchToHttp().getRequest();
    const auth = req.headers.authorization;

    if (!auth) throw new UnauthorizedException('No token provided');

    const token = auth.split(' ')[1];

    try {
      const payload = jwt.verify(token, process.env.JWT_SECRET || 'dev_secret');
      req.user = payload;
      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
