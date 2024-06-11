import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule}  from '@ng-select/ng-select';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ClientesComponent } from './clientes/clientes.component';

import { InterfazComunComponent } from './interfaz-comun/interfaz-comun.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';

import { RegistroClienteComponent } from './Formularios_Registro/registro-cliente/registro-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistroProveedoresComponent } from './Formularios_Registro/registro-proveedores/registro-proveedores.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { LoginPrincipalComponent } from './login-principal/login-principal.component';
import { LoginService } from './Servicios/login.service';

const appRoutes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'principal', component: InterfazComunComponent},
  {path: 'login', component: LoginPrincipalComponent},
  {path: 'principal/menu', component: MenuHorizontalComponent },
  {path: 'principal/clientes', component: ClientesComponent },
  {path: 'principal/clientes/RegistrarCliente', component: RegistroClienteComponent},
  {path: '404page', component: PageNotFoundComponent}, 
  {path: 'principal/proveedores', component: ProveedoresComponent},
  {path: 'principal/proveedores/RegistrarProveedor', component: RegistroProveedoresComponent}    
  
];    

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    InterfazComunComponent,
    MenuHorizontalComponent,
    RegistroClienteComponent,
    PageNotFoundComponent,
    RegistroProveedoresComponent,
    ProveedoresComponent,
    LoginPrincipalComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})

export class AppModule { }
