// import { Injectable } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { Uerservice } from '../User/user.services';
// import { Usermodule } from '../User/user.module';
// import { InjectModel } from '@nestjs/mongoose';
// import { Model } from "mongoose";
// import { UserDto } from '../User/user.dto';
// import * as jwt from 'jsonwebtoken';
// import { config } from 'dotenv';
// import * as bcrypt from 'bcrypt';
// import { Role } from '../role.enum';
// import { Roles } from '../roles.decorator';
// import { RolesGuard } from '../roles.guard';

// config();

// @Injectable()
// export class AuthService {
//   constructor(
//     @InjectModel('User') private UserModel:Model<UserDto>,
//     private readonly userService: Uerservice,
//     private readonly jwtService: JwtService,
//   ) {}

//   async validateUser(email: string, password: string): Promise<any> {
//     const user = await this.userService.finduser(email);
//     console.log("vhjhb",user)
//     const isPasswordMatch = await bcrypt.compare(
//       password,
//       user.password
//     );
//     if (user && isPasswordMatch) {
//       return user;
//     }
//     return null;
//   }



//   async login(user: UserDto) {

//     const {email,password}=user;
// console.log("kjj",user)

// const us=await this.UserModel.findOne({email});
// // console.log("vbcgvhgv",us)
//     const payload = {  sub:us._id,email: us.email };
  
//     // console.log("vbcgvhgv",payload)
//     const token=jwt.sign(payload,process.env.JWT_SECRET);
//     return token;

  

//     // return {
      
//     //   access_token: this.jwtService.sign({payload}),
      
//     // };
    
//   }
// }

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Uerservice } from 'src/User/user.services';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import 'dotenv/config'
@Injectable()
export class AuthService {
  constructor(
    private usersService: Uerservice,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.finduser(email);
    console.log("vhjhb",user)
    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );
    if (user && isPasswordMatch) {
      return user;
    }
    return null;
  }

  async signIn(email, password) {
    const user = await this.usersService.finduser(email);

    const isPasswordMatch = await bcrypt.compare(password, user.password);
  
    if (!isPasswordMatch) {
      throw new UnauthorizedException();
    }
  
    const payload = { sub: user._id, email: user.email };
  console.log(payload);
    // Provide a secret key when signing the JWT
    const token = await this.jwtService.signAsync(payload, { secret:"cncjmvhjnvgjgb" });
  
    return {
      access_token: token,
    };
  }

  async findUserById(id){
    const data=await this.usersService.findone(id);
    return data;
  }
 
  async getData(){
    return "hello"
  }
  
}