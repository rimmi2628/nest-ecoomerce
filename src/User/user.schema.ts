import { Schema,Prop,SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { Role } from "src/auth/role.enum";
export type UserDocument=User & Document;
@Schema()
export class User{
    @Prop()
    name:string

    @Prop()
    email:string

    @Prop()
    password:string

    @Prop()
    roles: Role[];



}

export const Userschema=SchemaFactory.createForClass(User);