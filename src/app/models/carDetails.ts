import { Car } from "./car";
import { CarImage } from "./carImage";

export interface CarDetails{
    id:number;
    brandName:string;
    colorName:string; 
    descriptions:string;
    dailyPrice:number;
    imagePath:string;
    
}