// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.services';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy,'local') {
//   constructor(private authService: AuthService) {
//     super({
//       usernameField: 'email',
//       passwordField: 'password',
//       passReqToCallback: true
//     });
//   }

//   async validate(req: any, email: string, password: string): Promise<any> {
//     console.log(`[LocalStrategy] validate: email=${email}, password=${password}`)
//     const user = await this.authService.validateUser(email, password);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }



// import { Strategy } from 'passport-local';
// import { PassportStrategy } from '@nestjs/passport';
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.services';

// @Injectable()
// export class LocalStrategy extends PassportStrategy(Strategy) {
//   constructor(private authService: AuthService) {
//     super();
//   }

//   async validate(email: string, password: string): Promise<any> {
//     const user = await this.authService.validateUser(email, password);
//     if (!user) {
//       throw new UnauthorizedException();
//     }
//     return user;
//   }
// }


// / eslint-disable prettier/prettier /
