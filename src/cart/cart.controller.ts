import { Controller, Post, Body, Request, UseGuards, Delete, NotFoundException, Param } from '@nestjs/common';

import { Cartservice } from './cart.services';
import { Itemdto } from '../item/item.dto';
@Controller('cart')
export class CartController {
  constructor(private cartService:Cartservice) { }


  @Post('/add')
  async addItemToCart(@Request() req, @Body() itemDTO: Itemdto) {
    const userId = req.user.user_id;
    const cart = await this.cartService.additemtocart(userId,itemDTO)
    return cart;
  }

  @Delete('/delete')
  async removeItemFromCart(@Request() req, @Body() { product_id }) {
    const userId = req.user.user_id;
    const cart = await this.cartService.removeItemFromCart(userId, product_id);
    if (!cart) throw new NotFoundException('Item does not exist');
    return cart;
  }

  @Delete('/:id')
  async deleteCart(@Param('id') user_id: string) {
    const cart = await this.cartService.deletecart(user_id);
    if (!cart) throw new NotFoundException('Cart does not exist');
    return cart;
  }
  
}