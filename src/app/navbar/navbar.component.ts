import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  islogin:boolean=false;
  constructor(private _AuthenticationService:AuthenticationService) { 

    _AuthenticationService.currentUser.subscribe(()=>{

      if(_AuthenticationService.currentUser.getValue()!=null){
         
        this.islogin=true
      }
  
      else{
        this.islogin=false
      }
    })
  }

  isLogout(){
    this._AuthenticationService.logout();
  }

 
  ngOnInit(): void {
    
  }

}
