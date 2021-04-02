import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarService } from 'src/app/services/car.service';



//for react => axios,fetch
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []; 
  dataLoaded = false;
  carDetails:CarDetails[]=[] ;
  filterText="";
  carImageBasePath="http://localhost:5000"


  constructor(private carService: CarService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarsByColor(params["id"])
     
        this.getCarsByBrand(params["id"])
      
      } else{
        this.getCars()
      }
    })
   
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data
      this.dataLoaded = true;
       
    })

  }
  getCarsByColor(id:number) {
    this.carService.getCarsByColor(id).subscribe((response) => {
      this.cars = response.data
      this.dataLoaded=true;

    })
   }
  
   getCarsByBrand(id:number){
     this.carService.getCarsByBrand(id).subscribe(response=>{
       this.cars=response.data
       this.dataLoaded=true;
     })
   }
    


  


}



