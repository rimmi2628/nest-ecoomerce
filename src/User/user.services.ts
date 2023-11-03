import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { UserDto } from "./user.dto";
import { User,UserDocument } from "./user.schema";
import { Model } from "mongoose";
import * as bcrypt from 'bcrypt'

@Injectable()
export class Uerservice{
    constructor(@InjectModel('User') private readonly usermodel:Model<UserDocument> ){}

    async createuser(userdto:UserDto):Promise<any>{
 
        const email=userdto.email;
    
        const uemail= await this.usermodel.findOne({email})
     
        if(uemail){

            return "email already exist"
        }
        const user=await this.usermodel.create(userdto);
        user. password= await bcrypt.hash(user.password,10);
        return user.save();
    }

    async finduser(email:string):Promise<any>{
        const user = await this.usermodel.findOne({email:email})
        return user;
    }

    async findone(id:string):Promise<any>{
        const data=await this.usermodel.findById(id);
        return data;
    }
}