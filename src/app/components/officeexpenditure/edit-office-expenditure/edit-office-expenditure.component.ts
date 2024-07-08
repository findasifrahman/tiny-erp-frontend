import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OfficeExpenditureService } from '../../../services/office-expenditure.service';
import { Router,ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { officeexpendituretmodel  } from '../../../models/office-expenditure.model';
import { OfficePurchaseItemListService } from '../../../services/office-purchase-itemlist.service';
import moment from 'moment';
@Component({
  selector: 'app-edit-office-expenditure',
  templateUrl: './edit-office-expenditure.component.html',
  styleUrl: './edit-office-expenditure.component.scss'
})
export class EditOfficeExpenditureComponent implements OnInit {
  id: number;
  officepurchaseitemlistid_arr: any =[]
  officepurchaseitemlist_arr: any = []

  maincompanyid = localStorage.getItem('maincompanyid');

  spinner_value = 50;
  loading = false;
  form!: FormGroup;
  officeItem: any;
  status_hidden = true;
  unit_arr: any[] = ["kg","g","pcs","liter"];
  constructor(private service: OfficeExpenditureService,private snackBar: MatSnackBar, private officePurchaseItemListService: OfficePurchaseItemListService,
    private formBuilder: FormBuilder, private router: Router,private route:ActivatedRoute,
    private models : officeexpendituretmodel ) { }

  ngOnInit(): void {
      // Implement the initialization logic here
      this.form = this.models.modelForms;
      this.form.reset();

      this.route.params.subscribe(params => {
        this.id =  parseInt(params['id']);
        this.service.getbyid(this.id).subscribe({
          next: response => {
            console.log("data by id", response);
            response["date"] = moment(response['date']).format("YYYY-MM-DD")
            this.form.patchValue(response);
            this.officePurchaseItemListService.getAll(this.maincompanyid).subscribe((posts) => {
              for(let i=0;i<posts.length;i++){
                this.officepurchaseitemlistid_arr.push(posts[i]['officepurchaseitemlistid']);
                this.officepurchaseitemlist_arr.push(posts[i]);
              }
              console.log(posts);
            });  
          },
          error: error => {
            // handle login error
            console.log("error getting data", error);
          }
  
        });
  
      })
      ////////////////////////
      this.officePurchaseItemListService.getAll(this.maincompanyid).subscribe((posts) => {
        for(let i=0;i<posts.length;i++){
          this.officepurchaseitemlistid_arr.push(posts[i]['officepurchaseitemlistid']);
          this.officepurchaseitemlist_arr.push(posts[i]);
        }
        console.log(posts);
      });  
  }
  officepurchaseitemlistidChanged(event: any){
    console.log("this.selected--", event)
    this.officepurchaseitemlist_arr.map((item: any, index: any) => {
      if(item['officepurchaseitemlistid'] == event){
        this.officeItem = item['itemname']
        this.form.controls['price'].setValue(item['price']);
        this.status_hidden = false;
      }
    })
  }


  async onSubmit() {
    // Implement the submit logic here
    const formValue = this.form.value;
    formValue['maincompanyid'] = this.maincompanyid

    console.log(formValue);

    
    if(formValue.maincompanyid != null ){
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
            this.router.navigate(["/ListOfficeExpenditure"]);
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
