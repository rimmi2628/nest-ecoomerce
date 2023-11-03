import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document,SchemaTypes} from "mongoose";

export type Orderdocument=Order & Document;
@Schema()
export class Order{
  
@Prop({type:SchemaTypes.ObjectId,ref:'Product'})

product_id: string;



@Prop()
quantity:number;
@Prop()
totalprice:number;



}

export const Orderschema=SchemaFactory.createForClass(Order);