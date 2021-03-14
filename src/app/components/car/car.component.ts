import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';



//for react => axios,fetch
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  
  cars:Car[] = [];
  dataLoaded=false;

  
  constructor(private carService:CarService) { }

  ngOnInit(): void {
   this.getCars();
    
  }
getCars(){
 this.carService.getCars().subscribe((response)=>{
   this.cars=response.data
   this.dataLoaded=true;
   
 })
  
}
 
   
  }



