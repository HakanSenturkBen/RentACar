import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaymentModel } from '../models/paymentModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl="https://localhost:44335/api/Payments/";


  constructor(private httpClient:HttpClient) { }



  add(payment:PaymentModel):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"Add",payment)

 }



}


