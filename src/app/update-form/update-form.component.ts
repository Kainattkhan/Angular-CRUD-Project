import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  people:any;

  public constructor(private peopleData: MyServiceService, private toastrService:ToastrService) {}

   public ngOnInit(): void{
    this.peopleData.getCustomers().subscribe(record=>
      {
        this.people=record;
      })
    }
  updateForm = new FormGroup({
      id: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      Name: new FormControl('',Validators.required),
      Gender: new FormControl('',Validators.required),
      PhoneNumber: new FormControl('',Validators.required)
   });

   onUpdate(){
    let FormData=this.updateForm.value;
    this.peopleData.updateData(FormData).subscribe({
      next:()=>
      {
       
        this.toastrService.success('Your record has been updated!', 'Title Success!');
        
      },
      error:()=>
      {
        console.log("error")
        this.toastrService.error('Error updating info','Error!!',);
      },
    });
    {
      this.updateForm.reset();
    }
 }
}
