import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA,MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/models/dialogData';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-diolog-box',
  templateUrl: './diolog-box.component.html',
  styleUrls: ['./diolog-box.component.css']
})
export class DiologBoxComponent{
  constructor(public dialogRef: MatDialogRef<CarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
