import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialogSCR4104012/dialog-component';
import { ApiService } from './services/api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'second_project';
  displayedColumnsSCR4104012: string[] = ['action', 'id', 'endorseCovFld', 'endorseCovDescFld', 'endorseNetCovAmtFld', 'endorseReducCovAmtFld', 'endorseNetPremAmtFld', 'endorseReducPremAmtFld', 'endorseNetCommFld', 'endorseReducCommFld', 'endorseRemFld'];
  datasourceSCR4104012!: MatTableDataSource<any>;

  constructor(private dialog : MatDialog, private api : ApiService) {

  }
  ngOnInit(): void {
    this.getAllListSCR4104012();
  }

  openDialogSCR4104012() {
    this.dialog.open(DialogComponent, {
      width:'80%',
      height: '80%',
    }).afterClosed().subscribe(val=>{
      if(val == 'SAVE'){
        this.getAllListSCR4104012();
        alert("List Added Succesfully");
      }
    });
  }
  getAllListSCR4104012(){
     this.api.getaddSCR4104012()
     .subscribe({
       next:(res)=>{
         this.datasourceSCR4104012 = new MatTableDataSource(res);
       },
       error:(err)=>{
        alert("Error adding a List");
       }
     });
  }

  editItemSCR4104012(row : any){
    this.dialog.open(DialogComponent,{
      width:'80%',
      height: '80%',
      data : row,
    }).afterClosed().subscribe(val=>{
      if(val == 'UPDATE'){
        this.getAllListSCR4104012();
        alert("List Succesfully");
      }
    });
  }

  deleteListSCR4104012(id:number){
    this.api.deleteDataSCR4104012(id)
    .subscribe({
      next:(res)=>{
        alert("List Deleted Succesfully");
        this.getAllListSCR4104012();
      },
      error:()=>{
        alert("Error while Deleting the List");
      }
    });
  }
}

