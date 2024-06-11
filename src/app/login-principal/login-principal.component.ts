import { Component } from '@angular/core';
import { credenciales } from '../clases/login';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { LoginService } from '../Servicios/login.service';

@Component({
  selector: 'app-login-principal',
  templateUrl: './login-principal.component.html',
  styleUrls: ['./login-principal.component.css']
})
export class LoginPrincipalComponent {
  constructor(
    private router: Router, 
    private location: Location,
    private loginService: LoginService
  ) {}

  Credenciales: credenciales = new credenciales();

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

  autenticarLogin() {
    
    this.loginService.autenticarUsuario(this.Credenciales).subscribe(
      (resp) => {
        alert(resp.mensajes[0]);
        this.router.navigate(['principal/menu']);
      },
      (error) => {
        console.error(error);
        alert(error.error.mensajes[0]);
      }
    );
  }
}
