import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  rentingCar:Rental;
  apiUrl="http://localhost:5000/api/"
  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getrentaldetails";
     return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }

  getRentalsByCarId(id:number):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "rentals/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<Rental>>(newPath)
  }
  setRentingCar(rental: Rental) {
    this.rentingCar = rental;
  }

  getRentingCar() {
    return this.rentingCar;
  }

  removeRentingCar() {
    this.rentingCar = null
  }

  addRental(rental:Rental):Observable<ResponseModel>{
    let newPath = this.apiUrl + "rentals/add";
    return this.httpClient.post<ResponseModel>(newPath,rental)
  }
}
