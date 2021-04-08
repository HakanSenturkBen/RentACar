import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';
import { ResponseModel } from '../models/responseModel';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44335/api/Rentals/";

  constructor(private httpClient:HttpClient) { }

  add(rental:Rental):Observable<ResponseModel>{
     return this.httpClient.post<ResponseModel>(this.apiUrl+"Add",rental)

  }
  
  getRentalByCarId(carId:number):Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"Getbyid?id="+carId
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath=this.apiUrl+"GetDetail"
      return this.httpClient.get<ListResponseModel<Rental>>(newPath);
    }
  }


  
  
