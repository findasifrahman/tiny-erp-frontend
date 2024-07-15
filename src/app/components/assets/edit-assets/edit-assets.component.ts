import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssetsService } from '../../../services/assets.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { assetsmodel  } from '../../../models/assets.model';
import moment from 'moment';
import { DateAdapter } from '@angular/material/core';
@Component({
  selector: 'app-edit-assets',
  templateUrl: './edit-assets.component.html',
  styleUrl: './edit-assets.component.scss'
})
export class EditAssetsComponent implements OnInit {
  id: number;
  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  constructor(private service: AssetsService,private snackBar: MatSnackBar,private route:ActivatedRoute,
    private formBuilder: FormBuilder, private router: Router,private dateAdapter: DateAdapter<Date>,
    private models : assetsmodel ) { 
      this.dateAdapter.setLocale('bd');
    }
  ngOnInit(): void {
    // Implement the initialization logic here
    this.form = this.models.modelForms;
    console.log("asset form", this.form);
    this.form.reset();
      
      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            console.log("data by id", response);
            response["purchasedate"] = moment(response['purchasedate']).format("YYYY-MM-DD")
            this.form.patchValue(response);
          },
          error: error => {
            // handle login error
            console.log("error getting data", error);
          }
  
        });
  
      })
  }
  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = localStorage.getItem('maincompanyid');

    console.log(formValue);
   

    if(formValue.maincompanyid != null){
      this.loading = true;
        await this.service.update(this.id,formValue).subscribe({
          next: response => {
            // handle successful login
            console.log("post req successfull");
            this.snackBar.open('Data Updated Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });
            this.loading = false;
            this.router.navigate(["/ListAssets"]);
          },
          error: error => {
            // handle login error
            console.log("error post", error);
            this.snackBar.open('Unsuccessfull', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
            this.loading = false;
          }
        });
    }
    else{
      this.snackBar.open('Please set Main Company ID', "Remove", {
        duration: 6000,
        verticalPosition: 'top',
        panelClass: ['red-snackbar']
      });

    }

    /**/
  }
}
