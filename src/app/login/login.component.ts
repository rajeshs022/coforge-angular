import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string='';
  password: string='';
  errorMessage: string='';

  //static login credentials
  vaildUsername='admin';
  validPassword='password';

  //DI - Router Di using Constructor

  constructor(private router:Router){}

  login(){
    if(this.username===this.vaildUsername&&this.password==this.validPassword){
      this.router.navigate(['/']);
    }
    else{
      this.errorMessage='Invalid Credentials, Please try again.'
    }
  }

}
