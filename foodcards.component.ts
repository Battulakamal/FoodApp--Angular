import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StoreService } from '../store.service';
import { ProdModel } from './prod.model';
@Component({
  selector: 'app-foodcards',
  templateUrl: './foodcards.component.html',
  styleUrls: ['./foodcards.component.css']
})
export class FoodcardsComponent implements OnInit {

  formValue !:FormGroup;
  prodModelObj : ProdModel = new ProdModel(); 
  prodData!:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  
  constructor(private formBuilder:FormBuilder, private store:StoreService){}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      food:[' '],
     price:[' '],
      offer: [' '],
      description:[' '],

    })
  this.getAllProds()
  }

  clickAddProd(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }

  postProdDetails(){ // done post api
    this.prodModelObj.food = this.formValue.value.food;
    this.prodModelObj.price = this.formValue.value.price;
    this.prodModelObj. offer = this.formValue.value. offer;
    this.prodModelObj.description = this.formValue.value.description;

    this.store.postProd(this.prodModelObj).subscribe(res=>{
      console.log(res);
      alert("User registered successfully ✍")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllProds() // for instance update data
    },
      err =>{
      alert ("something went wrong,  please check ✘")
    })


}

  // get all user details
  getAllProds() { 
    this.store.getProds().subscribe(res=>{
      this.prodData = res;
    })
  }

   //delete all user details
deleteProds(u:any){
  this.store.deleteProd(u.id).subscribe(res=>{
    alert("User record deleted 👍 ")
    this.getAllProds()// get the instaance data
  })
}

onEdit(u:any){
  this.showAdd = false;
  this.showUpdate = true;
  this.prodModelObj.id=u.id;
  this.formValue.controls['food'].setValue(u.food);
  this.formValue.controls['price'].setValue(u.price);
  this.formValue.controls['offer'].setValue(u.offer);
  this.formValue.controls['description'].setValue(u.description);
}

updateProdDetails(){
  this.prodModelObj.food = this.formValue.value.food;
  this.prodModelObj.price = this.formValue.value.price;
  this.prodModelObj.offer = this.formValue.value.offer;
  this.prodModelObj.description = this.formValue.value.description;

  this.store.updateProd(this.prodModelObj, this.prodModelObj.id).subscribe(res=>{
    alert("User record is updated! ❤")
    let ref = document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllProds()//get the instance data 
  })
}
}
