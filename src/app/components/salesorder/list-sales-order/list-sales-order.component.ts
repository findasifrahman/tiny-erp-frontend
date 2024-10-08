import { Component, OnInit,ViewChild,Inject } from '@angular/core';
import { SalesOrdersService } from '../../../services/salesorders.service';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmationdialogComponent } from '../../commoncomponents/confirmationdialog/confirmationdialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-list-sales-order',
  templateUrl: './list-sales-order.component.html',
  styleUrl: './list-sales-order.component.scss',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListSalesOrderComponent  implements OnInit {
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  expandedElement: any | null;

  displayedColumns: string[] = ['salesorderid','customercompany','salestype','salesagent','totalamount','status','orderdate','buttons'];
  displayedColumnsName: string[] = ['salesorderid','customercompany','salestype','salesagent','totalamount','status','orderdate','buttons'];

  detailColumns: string[] = ['productcategoryname','productsubcategoryname', 'quantity','unit', 'price'];

  AllElement: MatTableDataSource<any>;
  loading = false;
  spinner_value = 50;
  maincompanyid = localStorage.getItem('maincompanyid')
  constructor(private snackBar: MatSnackBar, private service: SalesOrdersService, public dialog: MatDialog,
    public _router: Router) { }

  ngOnInit() {
  }
  public doFilter = (event: Event) => {
    //this.AllElement.filter = value.trim().toLocaleLowerCase();
    const filterValue = (event.target as HTMLInputElement).value;
    this.AllElement.filter = filterValue.trim().toLowerCase();
  }

  async ngAfterViewInit() {
    this.service.getAll(this.maincompanyid).subscribe((posts) => {
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
        this.service.delete(id,this.maincompanyid).subscribe({
          next: response => {
            this.AllElement = new MatTableDataSource(response.data as any);
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

      }//if end
    })//dialog ref
  }//Delete end

  onUpdate(id: any) {
    this._router.navigate(['/editSalesOrder', id]);
  }

}
