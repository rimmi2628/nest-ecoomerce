// import { Controller, Request, Get, Post, Body, Res,HttpStatus, UseGuards} from '@nestjs/common';
// import { UserDto } from '../User/user.dto';
// import { Uerservice } from '../User/user.services';
// import { AuthService } from 'src/auth/auth.services';
// import { JwtAuthGuard } from './jwt.guard';
// import { Roles } from 'src/auth/roles.decorator';
// import { Role } from 'src/auth/role.enum';
// import { RolesGuard } from 'src/auth/roles.guard';
// import { LocalAuthGuard } from 'src/auth/local.guard';
// @Controller('auth')
// export class Usercontroller {
//   constructor(private authService: AuthService, private userService:Uerservice) {}

//   @Post('/register')
//   async register(@Body() createUserDTO: UserDto) {
//     const user = await this.userService.createuser(createUserDTO);
//     return user;
//   } 




//   @Get("/login")
//   async login(@Res() response,@Body() userdto: Record<string, any>) {
//     try {
//     const us=await  this.authService
//     .login(userdto.email);
   
//       return response.status(HttpStatus.CREATED).json({
//         message:"User login succesfully",
//         token:us
//       })
 
//   } catch (error) {
//     return response.status(HttpStatus.BAD_REQUEST).json({
//       statusCode: 400,
//       message: error,
//       error: 'Bad Request'
//     });
//   }
//   }



  
// }



import { Body, Controller, Post, HttpCode, HttpStatus,Request,UseGuards, Get } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.services';
import { UserDecorator } from 'src/auth/user.decorator';
import { User } from 'src/User/user.schema';
import { PassportModule } from '@nestjs/passport';
import { UserDto } from 'src/User/user.dto';
import { Uerservice } from 'src/User/user.services';


@Controller('auth')
export class Usercontroller {
  constructor(private authService: AuthService,private userService:Uerservice) {}


    @Post('/register')
  async register(@Body() createUserDTO: UserDto) {
    const user = await this.userService.createuser(createUserDTO);
    return user;
  } 


  @HttpCode(HttpStatus.OK)

  // @Post('/login')
  // async login(@Request() req) {
  //   return req.user;
  // }
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Get('/get')
  @UseGuards(AuthGuard('jwt'))
  getdata(
    @UserDecorator() user:User
  ) {
    console.log("hello");
    return this.authService.getData();
  }

}