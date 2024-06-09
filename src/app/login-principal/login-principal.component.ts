import { Component } from '@angular/core';
import { credenciales } from '../clases/login';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrl: './login-principal.component.css'
})
export class LoginPrincipalComponent {

  constructor(private router: Router, private location: Location) {}

  Credenciales: credenciales = new credenciales

  isLoginComponent: boolean = true;

  showPassword: boolean = false;

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }



  refreshPage() {
    this.location.go(this.location.path());
    window.location.reload(); 
  }
  navigateToLogin() {
    this.router.navigate(['/login']);
  }


}
