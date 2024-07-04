import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { MainCompanyService } from '../../../services/main-company.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationdialogComponent } from '../../commoncomponents/confirmationdialog/confirmationdialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-main-company',
  templateUrl: './list-main-company.component.html',
  styleUrl: './list-main-company.component.scss'
})
export class ListMainCompanyComponent implements OnInit{

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  displayedColumns: string[] = ['companyname','maincompanyid','datecreated','other','buttons'];
  displayedColumnsName: string[] = ['companyname','maincompanyid','datecreated','other','buttons'];
  AllElement: MatTableDataSource<any>;
  loading = false;
  spinner_value = 50;
  constructor(private snackBar: MatSnackBar, private mainCompanyService: MainCompanyService, public dialog: MatDialog,
    public _router: Router) { }

  ngOnInit() {
  }
  public doFilter = (event: Event) => {
    //this.AllElement.filter = value.trim().toLocaleLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.AllElement.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.mainCompanyService.getAll().subscribe((posts) => {
      this.AllElement = new MatTableDataSource(posts as any);
      this.AllElement.paginator = this.paginator;
      //setTimeout(() => this.AllElement.paginator = this.paginator);
      console.log(posts);
    });
  }
  onDelete(id: any) {
    console.log("Inside Delete--" + id);
    const dialogRef = this.dialog.open(ConfirmationdialogComponent, {
      width: '450px',
      hasBackdrop: true,
      data: "Are you sure you want to delete this data?"
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loading = true;
        this.mainCompanyService.delete(id).subscribe({
          next: response => {
            this.AllElement = new MatTableDataSource(response as any);
            this.AllElement.paginator = this.paginator;
            console.log(response);
            this.loading = false;
            this.snackBar.open('Data Deleted Successfully', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['blue-snackbar']
            });

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
        //////////////////////////////
        /*
        this.mainCompanyService.delete(id).subscribe((posts) => {
          this.AllElement = new MatTableDataSource(posts as any);
          this.AllElement.paginator = this.paginator;
          console.log(posts);

          this.snackBar.open('Data Deleted Successfully', "Remove", {
            duration: 6000,
            verticalPosition: 'top',
            panelClass: ['blue-snackbar']
          });
        },
          error => {
            this.snackBar.open('Unsuccessfull', "Remove", {
              duration: 6000,
              verticalPosition: 'top',
              panelClass: ['red-snackbar']
            });
          }
            
        )*/

      }//if end
    })//dialog ref
  }//Delete end

  onUpdate(id: any) {
    this._router.navigate(['/editMainCompany', id]);
  }
}
