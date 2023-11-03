// import { Module } from "@nestjs/common";
// import { MongooseModule } from "@nestjs/mongoose";
// import { Userschema } from "./user.schema";
// import { Uerservice } from "./user.services";
// import { Usercontroller } from "../auth/auth.controller";
// import { JwtService } from "@nestjs/jwt";
// import { AuthService } from "src/auth/auth.services";
// import { AuthModule } from "src/auth/auth.module";

// import { JwtStrategy } from "src/auth/jwt.strategy";
// import { JwtModule } from "@nestjs/jwt";
// import { PassportModule } from "@nestjs/passport";


// const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

// @Module({
//     imports:[MongooseModule.forFeature([{name:'User',schema:Userschema} ]),],
//     controllers:[Usercontroller],
//     providers:[Uerservice,AuthService,JwtService],
//     exports:[Uerservice
    
    
    
    
    
    
//     ]
// })

// export class Usermodule{}


import { Module } from '@nestjs/common';
import { Uerservice } from './user.services';
import { Usercontroller } from 'src/auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User,Userschema } from './user.schema';
import { JwtService } from '@nestjs/jwt';
import { AuthService } from 'src/auth/auth.services';


@Module({
  imports:[MongooseModule.forFeature([{ name: User.name, schema:Userschema }])],
  controllers: [Usercontroller],
  providers: [Uerservice,JwtService,AuthService],
  exports: [Uerservice,JwtService,AuthService],
})
export class UserModule {}