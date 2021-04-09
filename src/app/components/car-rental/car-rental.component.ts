import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { ToastrService } from 'ngx-toastr';
import { PaymentModel } from 'src/app/models/paymentModel';
import { Rental } from 'src/app/models/rental';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {

 
  rentPayment:FormGroup;
  dataLoaded=false;
  payCard:PaymentModel;
  transactionAmount:number;
  rental:Rental;
  paying:boolean=false;
  

  constructor(private formBuilder:FormBuilder,
    private paymentService:PaymentService,
    private toastrService:ToastrService,
    private rentalService:RentalService) { }


  ngOnInit(): void {
    this.ode()
    

   
  }

  ode(){
    this.rentPayment=this.formBuilder.group({
      rentDate:["",Validators.required],
      returnDate:["",Validators.required],
      creditCard:["",Validators.required]
     
    })

  
  }


 
  nextStep(){
    let deger=Object.assign({},this.rentPayment.value)
   
    let user:any=localStorage.getItem("username")
    user=JSON.parse(user)

    var turnd=Date.parse(this.rentPayment.value.returnDate);
    var rentd=Date.parse(this.rentPayment.value.rentDate);
    var result=(turnd-rentd)/1000;

    let car:any=localStorage.getItem("rentalCar")
    car=JSON.parse(car)
    let dailyPrice=car.dailyPrice

    result=result/86400;
    this.transactionAmount=dailyPrice*result;
  
    this.rental={
      rentalID:0,
      carId:car.carID,
      customerId:user.id,
      available:false,
      returnDate:deger.returnDate,
      rentDate:deger.rentDate
    }
    

    this.payCard={
      bankName:"YapıKredi",
      rentalId:5,
      accountName:"HakanRentACar",
      accountNumber:"115379645",
      creditCardNumber:deger.creditCard,
      transactionAmount:this.transactionAmount
    }
    this.paying=true
    

    
  }
  PayAndExit(){
    this.paymentService.add(this.payCard).subscribe(response=>{
  
      this.rentalService.add(this.rental).subscribe(response=>{
        this.toastrService.info("işlem tamamlandı")

      });

      this.toastrService.info(response.message,"Congratulations")
      location.reload()
    },error=>{
      this.toastrService.error("Kart numarası hatalı")
      if(error.errors.length>0){
        for (let i = 0; i <error.Errors.length; i++) {
          this.toastrService.error(error.Errors[i].ErrorMessage
            ,"Kart numarası hatalı")
        }       
      } 

    });
  }
}

