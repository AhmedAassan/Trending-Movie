import { Component, OnInit } from '@angular/core';
import { FormControl ,FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
declare let $:any;
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  error:string=''
  constructor(private _AuthenticationService:AuthenticationService, 
    private _Router:Router) { }

  
  registerForm = new FormGroup({

    first_name:new FormControl (null,
      [Validators.minLength(3),Validators.maxLength(20),Validators.required]),

    last_name:new FormControl (null,
      [Validators.minLength(3),Validators.maxLength(20),Validators.required]),

    email:new FormControl (null,
      [ Validators.email,Validators.required]),

    password:new FormControl (null,
      [Validators.pattern("^[A-Z][a-z0-9]{3,10}$"),Validators.required]),

    age:new FormControl (null,
      [Validators.min(16),Validators.max(80),Validators.required]),

  })
// 
  submitRegisterForm(submitRegisterForm:FormGroup){
    this._AuthenticationService.register(submitRegisterForm.value).subscribe(
      (response)=>{
        if(response.message == 'success'){
          this._Router.navigate(['/login'])
        }
        else{
          this.error = response.errors.email.message
        }
      }
      )  
  }

  

  ngOnInit():void {
    $('#design').particleground();
  }

}
