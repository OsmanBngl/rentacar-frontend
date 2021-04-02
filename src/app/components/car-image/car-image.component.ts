import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  images:CarImage[];
  carDetails:CarDetails[];
  constructor(private carImageService:CarImageService,
    private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if(params["id"]){
        this.getCarImagesById(params["id"])
      }
     
    })
    this.getCarImages();
  }

  getCarImagesById(id:number){
    this.carImageService.getCarImagesById(id).subscribe(response=>{
      this.images=response.data
    })
  }
  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
      this.images=response.data
    })
  }
}
