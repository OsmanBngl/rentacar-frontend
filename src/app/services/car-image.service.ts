import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { threadId } from 'node:worker_threads';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl="http://localhost:5000/api/";

  constructor(private httpClient:HttpClient) { }

 
  getCarImagesById(id:number):Observable<ListResponseModel<CarImage>>{
    let newPath=this.apiUrl + "carimages/getimagesbycarid?id="+id
    return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }

  getCarImages():Observable<ListResponseModel<CarImage>>{
      let newPath=this.apiUrl + "carimages/getall"
      return this.httpClient.get<ListResponseModel<CarImage>>(newPath)
  }
}
