import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseModel } from '../models/listResponseModel';



@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl="http://localhost:5000/api/"

  constructor(private httpClient:HttpClient) { }
  
  getColors():Observable<ListResponseModel<Color>>{
    let newPath= this.apiUrl + "colors/getall"
    
      return this.httpClient.get<ListResponseModel<Color>>(newPath);
  }
  getColorsById(id:number):Observable<ListResponseModel<Color>>{
    let newPath = this.apiUrl + "colors/getbyid?id="+id
    return this.httpClient.get<ListResponseModel<Color>>(newPath)
  }
}
