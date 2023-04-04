import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyServiceService } from '../my-service.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css' ]
})
export class ReactiveFormComponent implements OnInit{
  people:any;

  public constructor(private peopleData: MyServiceService, private toastrService:ToastrService) {}

   public ngOnInit(): void{
    this.peopleData.getCustomers().subscribe(record=>
      {
        this.people=record;
      })
    }

  myForm = new FormGroup({
      id: new FormControl('',[Validators.required, Validators.pattern(/^[0-9]+$/)]),
      Name: new FormControl('',Validators.required),
      Gender: new FormControl('',Validators.required),
      PhoneNumber: new FormControl('',Validators.required)
   });

onSubmit() {
  let FormData=this.myForm.value;
    this.peopleData.postData(FormData).subscribe({
      next:()=>
    {
     
      this.toastrService.success('Message Success!', 'Title Success!');
      
    },
    error:()=>
    {
      console.log("error")
      this.toastrService.error('Something went wrong','Error!!',);
    }
  });
  {
    this.myForm.reset();
  }
}
}
