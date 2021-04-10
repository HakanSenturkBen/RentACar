import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  tespit:boolean=false;
  constructor() { }

  ngOnInit(): void {


    if(localStorage.getItem("token")===null){
      
    }else{
      this.tespit=true;
    }

  }

  logout(){
    localStorage.removeItem("token")
    this.tespit=false;
  }

  
}
