import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarAdd } from '../models/carAdd';
import { CarInfoDetail } from '../models/carInfoDetail';
import { ResponseModel } from '../models/responseModel';
import { Findeks } from '../models/findeksModel';


@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl="https://localhost:44335/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetDetail"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandID:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetDetailbybrand?id="+brandID
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByColor(colorID:number):Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"Cars/GetDetailbycolor?id="+colorID
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }
  add(carAdd:CarAdd):Observable<ListResponseModel<CarAdd>>{
    
    return this.httpClient.post<ListResponseModel<CarAdd>>(this.apiUrl+"Cars/add",carAdd);
  }


  updateCar(carUpdate:CarAdd):Observable<ListResponseModel<CarAdd>>{
    let params=JSON.stringify(carUpdate);
    let headers= new HttpHeaders().set('Content-Type','application/json');
    return this.httpClient.post<ListResponseModel<CarAdd>>(this.apiUrl+"Cars/Update",params, {headers:headers});
  }

  updateInfoCar(car:CarInfoDetail):Observable<ListResponseModel<CarInfoDetail>>{
    
    return this.httpClient.post<ListResponseModel<CarInfoDetail>>(this.apiUrl+"CarInfos/Update",car);
  }

  saveCarInfo(car:CarInfoDetail):Observable<ResponseModel>{
    return this.httpClient.post<ResponseModel>(this.apiUrl+"carInfos/add",car)

  }

  

}
