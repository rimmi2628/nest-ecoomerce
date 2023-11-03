import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProductDto } from './product.dto';
import { Product,ProductDocument } from './product.schema';
import { Productmodule } from './product.module';
import { Model } from 'mongoose';


@Injectable()

export class Productservices{
    constructor(@InjectModel('Product') private readonly productModel: Model<ProductDocument>) { }


    async addproduct(createProduct:ProductDto):Promise<any>{
        const add=await this.productModel.create(createProduct);
        return add.save();
    }

    async getproduct():Promise<Product[]>
    {
        const getproducts=await this.productModel.find()
        return getproducts;
    }

    async getproductbyid(id:string):Promise<any>{
        const prooduct=await this.productModel.findById(id)
        return prooduct;
    }

    async deleteproduct(id:string):Promise<any>{
       await this.productModel.findByIdAndRemove(id)
        return "Product deleted successfully..."
    }
    async updateproduct(id:string,updateproduct:ProductDto):Promise<any>{
        await this.productModel.findByIdAndUpdate(id,updateproduct);
        return "product update successfully"
    }

}