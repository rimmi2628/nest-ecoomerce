import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Cart,Cartdocument } from "./cart.schema";
import { Itemdto } from "../item/item.dto";
import { Cartmodule } from "./cart.module";

@Injectable()
export class Cartservice{

    constructor(@InjectModel('Cart') private readonly cartModel:Model<Cartdocument>){}

    async addcart(user_id:string,Itemdto:Itemdto,subTotalPrice:number,totalPrice:number){
       const newcart= await this.cartModel.create({
            user_id,
            items:[{...Itemdto,subTotalPrice}],
            totalPrice
        });
        return newcart;
    }

    async getcart(user_id:string):Promise<any>{
        const cart=await this.cartModel.findById({user_id});
        return cart;
    }

    async deletecart(user_id:string):Promise<any>{
        await this.cartModel.findOneAndRemove
        ({user_id});
        return "cart remove succesfully"
    }
    private recalculateCart(cart: Cartdocument) {
        cart.totalPrice = 0;
        cart.items.forEach(item => {
          cart.totalPrice += (item.quantity * item.price);
        })
      }
    async additemtocart(user_id:string,Itemdto:Itemdto):Promise<Cart>{


        const {product_id,quantity,price}=Itemdto;

        const subTotalPrice = quantity * price;

         const cart = await this.getcart(user_id);
         if(cart){
            const itemIndex = cart.items.findIndex((item) => item.product_id == product_id);

            
      if (itemIndex > -1) {
        let item = cart.items[itemIndex];
        item.quantity = Number(item.quantity) + Number(quantity);
        item.subTotalPrice = item.quantity * item.price;

        cart.items[itemIndex] = item;
        this.recalculateCart(cart);
        return cart.save();
      } else {
        cart.items.push({ ...Itemdto, subTotalPrice });
        this.recalculateCart(cart);
        return cart.save();
      }
    } else {
      const newCart = await this.addcart(user_id, Itemdto, subTotalPrice, price);
      return newCart;
    }
         }
         async removeItemFromCart(user_id: string, product_id: string): Promise<any> {
            const cart = await this.getcart(user_id);
        
            const itemIndex = cart.items.findIndex((item) => item.product_id == product_id);
        
            if (itemIndex > -1) {
              cart.items.splice(itemIndex, 1);
              return cart.save();
            }
          }

    }
