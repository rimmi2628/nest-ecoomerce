// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { Productmodule } from './Product/product.module';
// import { Usermodule } from './User/user.module';
// import { APP_GUARD } from '@nestjs/core';
// import { RolesGuard } from './auth/roles.guard';
// import { AuthModule } from './auth/auth.module';



// @Module({
//   imports: [MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestecommerce'),Productmodule,Usermodule],
//   controllers: [],
//   providers: [  {provide: APP_GUARD,
//     useClass: RolesGuard}],
// })
// export class AppModule {}


import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"

import { UserModule } from "./User/user.module";
import { AuthModule } from "./auth/auth.module";


@Module({
  imports: [UserModule, AuthModule, MongooseModule.forRoot('mongodb://127.0.0.1:27017/nestecommerce')],
    
    

})
export class AppModule {}