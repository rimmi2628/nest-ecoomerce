import { Prop,Schema,SchemaFactory } from "@nestjs/mongoose";
import { Document,SchemaTypes } from "mongoose";
import { Item } from "src/item/item.schem";

export type Cartdocument=Cart&Document

@Schema()
export class Cart{
    @Prop({type:SchemaTypes.ObjectId,ref:'User'})
    user_id:string;
    @Prop()
    items: Item[];

    @Prop()

    totalPrice:number;


}
export const cartschema=SchemaFactory.createForClass(Cart)