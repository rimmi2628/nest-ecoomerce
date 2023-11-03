
import { Module }from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './product.schema';
import { Productcontroller } from './product.controller';
import { Productservices } from './product.services';

@Module({
    imports:[MongooseModule.forFeature([{name:'Product',schema:ProductSchema}])], 
    controllers:[Productcontroller],
    providers:[Productservices],
    
    
})

export class Productmodule{

}