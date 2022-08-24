import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

 
  signupForm!:FormGroup;
  constructor(private formBulider: FormBuilder, private _http:HttpClient, private router:Router) { }


  public userList= [
    {userName:'john'},
    {userName:'john_12'},
    {userName:'david'}
    ];
    public email:any;
    public msg:any;
   
    public warn:any;
    public pwd:any;
    public regExp = /(?=.*[A-Z])\w{4,15}/;
    public pwdStrength='';
    public min:any;
    public max:any;
    public low:any;
    public high:any;
    public val:any;
    public strengthMeter(min:any,max:any,val:any,low:any,high:any){
    this.min=min;
    this.max=max;
    this.low=low;
    this.high=high;
    this.val=val;
    }
    public VerifyUser() {
    for(var i=0; i<this.userList.length; i++){
    if (this.userList[i].userName == this.email){
    this.msg = 'Email ID taken-try another';
    break;
    } else {
    this.msg = 'Email ID Available';
    }
    }
    }
    public VerifyCaps(event:any){
    if(event.keyCode>=65 && event.keyCode<=90){
   
    this.warn='Warning ! Caps is On';
    }
    else{
    this.warn='';
    }
    }
    public VerifyPassword(){
    if (this.pwd.match(this.regExp)){
    this.pwdStrength='Strong Password';
    this.strengthMeter(1,100,100,0,0);
    }
    else{
    if(this.pwd.length<4) {
    this.pwdStrength='Poor Passsword';
    this.strengthMeter(1,100,100,60,80);
    }
    else{
    this.pwdStrength='Weak Password';
    this.strengthMeter(1,200,200,40,80);
    }
   
    }
    }
   
   

  ngOnInit(): void {

    this.signupForm = this.formBulider.group({
      name:['',Validators.required],
      email:['',Validators.required],
      mobile:['', Validators.required],
      password:['', Validators.required]
    })
  }

  signUp(){
    this._http.post<any>("http://localhost:3000/admins",this.signupForm.value).subscribe(re=>{
      alert("signup succesfully");
      this.signupForm.reset();
      this.router.navigate(['log'])
    },
    err =>{
      alert("something went wrong")
    })
  }
}