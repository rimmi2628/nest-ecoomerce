import { InjectModel } from "@nestjs/mongoose";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { Order,Orderdocument } from "./order.schema";
import { Orderdto } from "./order.dto";


@Injectable()

export class Orderservice{
    constructor(@InjectModel(' Order') private readonly orderModel:Model<Orderdocument>){}
    async addorder(orderdto:Orderdto):Promise<Order>{

        const createorder=await this.orderModel.create(orderdto);
        return createorder;

    }

    async findorder():Promise<any>{
        const getorder=await this.orderModel.find();
        return getorder;
    }
    async findorderbyid(id:string):Promise<any>{
        const oneorder=await this.orderModel.findById(id);
        return oneorder;
    }

    async deleteorder(id:string):Promise<any>{
        await this.orderModel.findByIdAndRemove(id);
        return "Order delete successfully";

    }

    async updateorder(id:string,updateproductdto:Orderdto):Promise<any>{
        await this.orderModel.findByIdAndUpdate(id,updateproductdto);

        return "update order succesffuly"
    }

}