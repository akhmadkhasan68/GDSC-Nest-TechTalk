import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { config } from 'src/config';
import { IJwtPayload } from './jwt-payload.interface';
import { UserRepository } from 'src/modules/user/repositories/user.repository';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private readonly userRepository: UserRepository,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true,
      secretOrKey: config.jwt.secret,
    });
  }

  async validate(payload: any) {
    const user = await this.userRepository.findUserById(payload.userId);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
