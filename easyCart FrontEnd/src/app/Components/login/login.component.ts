import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/Service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



 loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
    password: ["", [Validators.required]]

  })

  constructor(private fb: FormBuilder, private service: LoginService, private router:Router) { }

  ngOnInit(): void {
    // if(localStorage.getItem('email'))
    // {
    //   this.loginForm.setValue({
    //     email:localStorage.getItem('email'),
    //     password:""
    //   })
    // }
    // localStorage.setItem('email',"")
  }
  login(){
    if(this.loginForm.valid)
    {
     this.service.login(this.loginForm.value).subscribe(
       (data)=>{

    if(data){
      alert("Login  Successfully!")
      localStorage.setItem('token',data.accessToken.value)
      localStorage.setItem('currentUser',data.name)
      this.router.navigateByUrl('home');
    } 
     }, (data) => {
      alert(data.error.message)
    }
    // map=>this.router.navigateByUrl('login'),
    // data=>alert("registration success!")
    )

    }
    else{
      alert("Invalid details")
    }

  }
  }


