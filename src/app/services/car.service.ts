import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  apiUrl="http://localhost:5000/api/";

  constructor(private httpClient:HttpClient) { }
 
  getCars():Observable<ListResponseModel<Car>>{
     let newPath= this.apiUrl +"cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  
 }
 getCarsByColor(id:number):Observable<ListResponseModel<Car>>{
  let newPath =this.apiUrl + "cars/getcarsbycolorid?id="+id
  return this.httpClient.get<ListResponseModel<Car>>(newPath);

}
  
}
