import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
//import { BreakpointObserver,Breakpoints, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-delete-form',
  templateUrl: './delete-form.component.html',
  styleUrls: ['./delete-form.component.css']
})
export class DeleteFormComponent implements OnInit {

  constructor(private request:MyServiceService, private toastrService:ToastrService) { }

    ngOnInit() {
      }

  IDs:any;


  deleteData=new FormGroup({

    id: new FormControl('', Validators.required),
  });

  get id(){
    return this.deleteData.get('id');
  }

  delete(){
    this.IDs=this.deleteData.value.id;
    this.request.deleteDataById(this.IDs).subscribe({
      next: () => {
        this.toastrService.success('Record has been deleted!!', 'Deletion');
      },
      error: () => {
       this.toastrService.error('Error: Id not found', 'Error');
      },
    });
    {
      this.deleteData.reset();
    }
}
}
