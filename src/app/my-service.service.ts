import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class MyServiceService{

  constructor(private http: HttpClient) { }

  baseURL="http://localhost:3000/people";

  getCustomers(){
    return this.http.get('http://localhost:3000/people');
  }
   postData(data:any){
    return this.http.post('http://localhost:3000/people',data);
  }

  deleteDataById(id:number) {
    const url= `http://localhost:3000/people/${id}`;
    return this.http.delete(url);
  }

  updateData(data: any){
    return this.http.patch(`${this.baseURL}/${data.id}`, data)
}
}



