import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {


  constructor(private _http: HttpClient) { }

  //add  the user details by post method
  postForm(data:any){
    return this._http.post<any>("http://localhost:3000/admins", data).pipe(map((res:any) => {
     return res;
    }))
  }


  // get the all user details by using get method
  getForms(){
    return this._http.get<any>("http://localhost:3000/admins").pipe(map((res:any) => {
     return res;
    }))
  }


  //update the user details by the put method
  updateForm(data:any, id: number){
    return this._http.put<any>("http://localhost:3000/admins/"+id, data).pipe(map((res:any) => {
     return res;
    }))
  }


  //delete the user details by the delete method
  deleteForm(id:number){
    return this._http.delete<any>("http://localhost:3000/admins/"+id).pipe(map((res:any) => {
     return res;
    }))
  }

}

