import { Controller,Post,Get,Delete,Put,Body,HttpStatus,Res,Param } from "@nestjs/common";
import { ProductDto } from "./product.dto";
import { Productservices } from "./product.services";

@Controller('product')
export class Productcontroller{
    constructor(private readonly productservice:Productservices){}
    @Post('/add')

    async createproduct(@Res() response ,@Body() productDto:ProductDto){
   const data=await this.productservice.addproduct(productDto);
   return response.status(HttpStatus.CREATED).json({
    data:data
   })
    }

    @Get('/get')

    async getproductt(@Res() response){
        const getdata=await this.productservice.getproduct();
        return response.status(HttpStatus.CREATED).json({
            data:getdata
        })
    }

    @Get('/getid/:id')

    async getidpro(@Res() response,@Param('id') id:string){
        const getonedata=await this.productservice.getproductbyid(id);
        return response.status(HttpStatus.CREATED).json({
            data:getonedata
        })

    }
    @Delete('/delete/:id')

    async deletepro(@Res() response,@Param('id') id:string){
        const deletepro=await this.productservice.deleteproduct(id);
        return response.status(HttpStatus.CREATED).json({
            msg:"Product deleted successfully..."
        })
    }
    @Put('update/:id')

    async updatepro(@Res() response,@Param('id') id:string,@Body() updateprod:ProductDto){
       await this.productservice.updateproduct(id,updateprod);
        return response.status(HttpStatus.CREATED).json({
            msg:"Product updated successfully..."
        })
    }
    
}



