import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {FormControl} from '@angular/forms';
import { ApiService } from '../services/api.service';
import { Injectable } from '@angular/core';



export interface selected {
  selected1: string;
  selected2: number;
}

const selected = [
  {selected1: 'Murder and Assault Rider', selected2: '100.00' }
];


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog-component.html',
  styleUrls: ['./dialog-component.css']
})

@Injectable({
  providedIn: 'root'
})

export class DialogComponent implements OnInit {

  public isDisabled = true;
  endorseaddFormSCR4104012 !: FormGroup;
  actionBtn : string = "confirm";
  cancelBtn : string = "close"
  endorseReducCovAmtFld : boolean = false;
  disableSelect = new FormControl(true);
  selected = this.getselected();
  getselected(){
    return selected;
  }



constructor(private formBuilder : FormBuilder, private api : ApiService,
  @Inject(MAT_DIALOG_DATA) public editData :  any,
  private dialogRef : MatDialogRef<DialogComponent>) { }



ngOnInit(): void {
  this.endorseaddFormSCR4104012 = this.formBuilder.group({
    endorseCovFld : ['',Validators.required],
    endorseCovDescFld : [''],
    endorseNetCovAmtFld : ['',Validators.required],
    endorseReducCovAmtFld : ['',Validators.required],
    endorseNetPremAmtFld : ['',Validators.required],
    endorseReducPremAmtFld : ['',Validators.required],
    endorseNetCommFld : ['',Validators.required],
    endorseReducCommFld : ['',Validators.required],
    endorseRemFld : ['']
  });

  if(this.editData){
    this.actionBtn = "UPDATE";
    this.endorseaddFormSCR4104012.controls['endorseCovFld'].setValue(this.editData.endorseCovFld);
    this.endorseaddFormSCR4104012.controls['endorseCovDescFld'].setValue(this.editData.endorseCovDescFld);
    this.endorseaddFormSCR4104012.controls['endorseNetCovAmtFld'].setValue(this.editData.endorseNetCovAmtFld);
    this.endorseaddFormSCR4104012.controls['endorseReducCovAmtFld'].setValue(this.editData.endorseReducCovAmtFld);
    this.endorseaddFormSCR4104012.controls['endorseNetPremAmtFld'].setValue(this.editData.endorseNetPremAmtFld);
    this.endorseaddFormSCR4104012.controls['endorseReducPremAmtFld'].setValue(this.editData.endorseReducPremAmtFld);
    this.endorseaddFormSCR4104012.controls['endorseNetCommFld'].setValue(this.editData.endorseNetCommFld);
    this.endorseaddFormSCR4104012.controls['endorseReducCommFld'].setValue(this.editData.endorseReducCommFld);
    this.endorseaddFormSCR4104012.controls['endorseRemFld'].setValue(this.editData.endorseRemFld);
    this.cancelBtn = "Cancel";
 }
}

addListSCR4104012(){
  if(!this.editData){
    if(this.endorseaddFormSCR4104012.valid){
      this.api.postaddSCR4104012(this.endorseaddFormSCR4104012.value)
      .subscribe({
        next:(res)=>{
          alert("List Added Successfully");
          this.endorseaddFormSCR4104012.reset();
          this.dialogRef.close('SAVE');
        },
        error:()=>{
          alert("Error in Adding List")
        }
      })

  }
  }else{
    this.UpdateDataSCR4104012()
  }
}
UpdateDataSCR4104012(){
  this.api.putDataSCR4104012(this.endorseaddFormSCR4104012.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("List Updated Successfully");
      this.endorseaddFormSCR4104012.reset();
      this.dialogRef.close('UPDATE');
    },
    error:()=>{
      alert("Error While Updating the List");
    }
  })
}


}
