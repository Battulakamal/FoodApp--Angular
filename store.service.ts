import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  


  constructor(private _http: HttpClient) { }

  //add  the user details by post method
  postProd(data:any){
    return this._http.post<any>("http://localhost:3000/offers", data).pipe(map((res:any) => {
     return res;
    }))
  }


  // get the all user details by using get method
  getProds(){
    return this._http.get<any>("http://localhost:3000/offers").pipe(map((res:any) => {
     return res;
    }))
  }


  //update the user details by the put method
  updateProd(data:any, id: number){
    return this._http.put<any>("http://localhost:3000/offers/"+id, data).pipe(map((res:any) => {
     return res;
    }))
  }


  //delete the user details by the delete method
  deleteProd(id:number){
    return this._http.delete<any>("http://localhost:3000/offers/"+id).pipe(map((res:any) => {
     return res;
    }))
  }

}

