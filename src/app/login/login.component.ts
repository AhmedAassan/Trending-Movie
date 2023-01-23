import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
declare let $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string=''

  loginForm = new FormGroup({

    
    email:new FormControl (null,
      [ Validators.email,Validators.required]),

    password:new FormControl (null,
      [Validators.required])
    
  })  
  constructor(private _AuthenticationService:AuthenticationService, 
    private _Router:Router) { }

  postLogin(loginForm:FormGroup){

    this._AuthenticationService.login(loginForm.value).subscribe((respond)=>{
        
        if(respond.message=='success')
        {
          localStorage.setItem('userToken', respond.token);
          this._AuthenticationService.saveCurrentUser();
          this._Router.navigate(['/home']);
        }
        else
        {
          this.error = respond.message
        }
      }
      )
  }

  ngOnInit(): void {
    $('#design').particleground();
  }

}
