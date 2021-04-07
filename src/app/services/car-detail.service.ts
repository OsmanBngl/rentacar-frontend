import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetails } from '../models/carDetails';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="http://localhost:5000/api/"
  constructor(private httpClient:HttpClient) { }

  getCarDetailByCarId(id:number):Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl + "cars/getcardetailsid?id="+ id
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
 
  getCarBrandAndColorDetails(brandId:number,colorId:number):Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl + "cars/getcarbrandandcolordetails?colorId="+colorId+'&brandId='+brandId
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }

  getCarDetails():Observable<ListResponseModel<CarDetails>>{
    let newPath =this.apiUrl + "cars/getcardetails"
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath)
  }
  
}
