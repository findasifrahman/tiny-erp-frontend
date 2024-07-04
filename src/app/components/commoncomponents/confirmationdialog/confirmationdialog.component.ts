import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmationdialog',
  templateUrl: './confirmationdialog.component.html',
  styleUrl: './confirmationdialog.component.scss'
})
export class ConfirmationdialogComponent implements OnInit{
  constructor(
    public dialogRef: MatDialogRef<ConfirmationdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public message: string) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }
}
