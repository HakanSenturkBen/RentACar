import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validform',
  templateUrl: './validform.component.html',
  styleUrls: ['./validform.component.css']
})
export class ValidformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  if(localStorage.getItem("this")===null){
    
  } else{
  localStorage.removeItem("this")
    location.reload() 
  }
  }

}
