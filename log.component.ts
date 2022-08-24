import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  
  loginForm!:FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private _http:HttpClient, private route:Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required]
    })
  }

  logIn(){
    this._http.get<any>("http://localhost:3000/admins").subscribe(res=>{
      const User = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

      })
      if(User){
        alert("Login successfull Welcome")
        this.loginForm.reset();
        this.router.navigate(['head'])
      }else{
        alert("user not found,signup")
      }
    },err =>{
      alert("error in server side")
    })
  }
  }