import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument= Product & Document;
@Schema()
export class Product{
    @Prop()

    name:string

    @Prop()

    description:string

    @Prop()

    category:string

    @Prop()

    price:string



}

export const ProductSchema =SchemaFactory.createForClass(Product)