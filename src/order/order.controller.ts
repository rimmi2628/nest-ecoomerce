import { Controller,Post,Get,Delete,Put,Body,HttpStatus,Res,Param } from "@nestjs/common";
import { Orderdto } from "./order.dto";
import { Orderservice } from "./order.service";
import { response } from "express";

@Controller()

export class Ordercontroller{
    constructor(private readonly orderservices:Orderservice){}

    async addorder( @Res() response,@Body() orderdto:Orderdto){
        const order=await this.orderservices.addorder(orderdto);
        return response.status(HttpStatus.CREATED).json({
            data:order
        })
    }

    async findorder(@Res() response){
        const data=await this.orderservices.findorder();
        return response.status(HttpStatus.CREATED).json({
            data:data,
            msg:"Order found successfully"
        })
    }

 
}