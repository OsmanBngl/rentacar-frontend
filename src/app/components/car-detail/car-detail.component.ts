import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit {

  carDetails:CarDetails[]=[];
  dataLoaded=false;
  carImageBasePath="http://localhost:5000/";
  
  
  constructor(private carDetailService:CarDetailService, 
    private activatedRoute:ActivatedRoute
     ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
       
        this.getCarDetailById(params["id"])
      }
    })
  }

 
  getCarDetailById(id:number){
    this.carDetailService.getCarDetailByCarId(id).subscribe(response=>{
      this.carDetails=response.data
    })
  }


  
}
