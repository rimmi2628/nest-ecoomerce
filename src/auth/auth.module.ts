// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.services';
// import { Usermodule } from 'src/User/user.module';
// import { PassportModule } from '@nestjs/passport';
// import { LocalStrategy } from './local.strategy';
// import { LocalAuthGuard } from './local.guard';
// import { JwtStrategy } from './jwt.strategy';
// import { Usercontroller } from './auth.controller';
// import { RolesGuard } from './roles.guard';

// import { JwtModule } from '@nestjs/jwt';
// import 'dotenv/config'
// import { Uerservice } from 'src/User/user.services';
// const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

// @Module({
//   imports: [
//     passportModule,
//     Usermodule,
//     JwtModule.register({
//       global: true,
//       secret: process.env.JWT_SECRET,
//       signOptions: { expiresIn: '3600s' },
//     }),
  
//   ],
//   providers: [
//     AuthService, 
//     LocalStrategy, 
//     JwtStrategy,
//     LocalAuthGuard,
//     Uerservice,

    
//  RolesGuard
//   ],
//   controllers: [Usercontroller],
//   exports: [passportModule, JwtStrategy,Usermodule],
// })
// export class AuthModule {}



import { Module } from '@nestjs/common';
import { AuthService } from './auth.services';

import { JwtStrategy } from './jwt.strategy';
import { UserModule } from 'src/User/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { User } from 'src/User/user.schema';


@Module({
  imports: [
     UserModule,
    PassportModule,
    JwtModule.register({
      secret:"cncjmvhjnvgjgb",
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, JwtStrategy,User],
  exports: [AuthService],
})
export class AuthModule {}