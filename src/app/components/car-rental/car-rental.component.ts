import { getMatScrollStrategyAlreadyAttachedError } from '@angular/cdk/overlay/scroll/scroll-strategy';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Rental } from 'src/app/models/rental';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

  
  rentPayment:FormGroup;
  dataLoaded=false;


  constructor(private formBuilder:FormBuilder,
     private toastrService:ToastrService) { }

  ngOnInit(): void {
    this.ode()

   
  }
  ode(){
    this.rentPayment=this.formBuilder.group({
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      creditCard:["",Validators.required],
    })

  }

 
  getMemberInfo(){

    
    console.log(this.rentPayment)

    let user:any=localStorage.getItem("username")
    user=JSON.parse(user)
    let car:any=localStorage.getItem("rentalCar")
    let rental:Rental;
   }

}
