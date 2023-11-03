import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document,SchemaTypes} from "mongoose";

export type Itemdocument=Item & Document;
@Schema()
export class Item{
  
@Prop({type:SchemaTypes.ObjectId,ref:'Product'})

product_id: string;

@Prop()
name:string;

@Prop()
quantity:number;
@Prop()
price:number;
@Prop()
subTotalPrice: number; 


}

export const Itemschema=SchemaFactory.createForClass(Item);