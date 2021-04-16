import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';

import { PaymentModel } from 'src/app/models/paymentModel';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { PaymentService } from 'src/app/services/payment.service';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-car-rental',
  templateUrl: './car-rental.component.html',
  styleUrls: ['./car-rental.component.css']
})
export class CarRentalComponent implements OnInit {


  rentPayment: FormGroup;
  dataLoaded = false;
  payCard: PaymentModel;
  transactionAmount: number;
  rental: Rental;
  paying: boolean = false;
  currentCar: any
  hatalar:string;
  


  constructor(private formBuilder: FormBuilder,
    private paymentService: PaymentService,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private customerService: CustomerService,
    private router: Router) { }


  ngOnInit(): void {
    this.ode()
    this.currentCar = localStorage.getItem("rentalCar")
    this.currentCar = JSON.parse(this.currentCar)
   

  }

  reDirection(where: string) {
    this.toastrService.info("redirection to " + where + " service")
    route: ActivatedRouteSnapshot
    this.router.navigate([where])
  }



  ode() {
    this.rentPayment = this.formBuilder.group({
      rentDate: ["", Validators.required],
      returnDate: ["", Validators.required],
      creditCard: ["", Validators.required]

    })


  }



  nextStep() {
    if (this.rentPayment.valid) {


      let deger = Object.assign({}, this.rentPayment.value)

      let user: any = localStorage.getItem("username")
      user = JSON.parse(user)

      var turnd = Date.parse(this.rentPayment.value.returnDate);
      var rentd = Date.parse(this.rentPayment.value.rentDate);
      var result = (turnd - rentd) / 1000;
      var gun:any=new Date;
      var ben=gun.getFullYear()+"-"+(gun.getMonth()+1)+"-"+gun.getDate();
      let sonuc=Date.parse(ben)
      let bir=rentd.toString().substring(0,5);
      let iki=sonuc.toString().substring(0,5);
      let test:boolean=true;
      


      
      console.log(bir,iki,test);
      
      
        
      
      

      let car: any = localStorage.getItem("rentalCar")
      car = JSON.parse(car)
      let dailyPrice = car.dailyPrice

      result = result / 86400;
      this.transactionAmount = dailyPrice * result;

      this.rental = {
        rentalID: 0,
        carId: car.carID,
        customerId: user.id,
        available: false,
        returnDate: deger.returnDate,
        rentDate: deger.rentDate
      }


      this.payCard = {
        bankName: "YapıKredi",
        rentalId: 5,
        accountName: "HakanRentACar",
        accountNumber: "115379645",
        creditCardNumber: deger.creditCard,
        transactionAmount: this.transactionAmount
      }

      if (iki>bir||iki==bir) {
        this.hatalar="başlangıç tarihi geçmişe dönük olamaz";
      
      }else{
        this.hatalar="";
        this.paying = true

      }
      
      

    } else this.toastrService.warning("alanları tam doldurunuz")



  }
  PayAndExit() {
      
    this.paymentService.add(this.payCard).subscribe(response => {
      this.rentalService.add(this.rental).subscribe(response =>{
        this.dataLoaded=true;
        this.toastrService.info(response.message,"işlem tamamlandı")},
        error => {this.paying=false;
          for (var hata of error.error.Errors) {
            this.toastrService.error(hata.ErrorMessage,"Attention")
             }
        });

      this.toastrService.info(response.message , "Congratulations")
    }, error => {
      for (var hata of error.error.Errors) {
        this.toastrService.error(hata.ErrorMessage,"Attention")
      };
      this.paying=false;
    });
    
    }

  yesAdd() {

    let yeni: any = localStorage.getItem("username");
    yeni = JSON.parse(yeni);
    yeni.creditCard = this.payCard.creditCardNumber;
    this.customerService.update(yeni).subscribe(res => {
      this.toastrService.info("bilgileriniz güncellendi")
      this.reDirection("")
    });
  }



}

