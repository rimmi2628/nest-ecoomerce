import { IsNotEmpty } from "class-validator";

export class ProductDto{

    name:string;
    description:string;
    category:string;
    price:string
}