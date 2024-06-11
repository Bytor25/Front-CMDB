import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InterfazComunComponent } from './interfaz-comun/interfaz-comun.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginPrincipalComponent } from './login-principal/login-principal.component';

import { ClientesComponent } from './opciones_menu/clientes/clientes.component';
import { ProveedoresComponent } from './opciones_menu/proveedores/proveedores.component';

import { RegistroClienteComponent } from './Formularios_Registro/registro-cliente/registro-cliente.component';
import { RegistroProveedoresComponent } from './Formularios_Registro/registro-proveedores/registro-proveedores.component';

import { ConsultarClienteComponent } from './consultas/consultar-cliente/consultar-cliente.component';
import { ConsultarProveedorComponent } from './consultas/consultar-proveedor/consultar-proveedor.component';

import { ActualizacionClienteComponent } from './Formularios_Actualizacion/actualizacion-cliente/actualizacion-cliente.component';
import { ActualizacionProveedorComponent } from './Formularios_Actualizacion/actualizacion-proveedor/actualizacion-proveedor.component';

const appRoutes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'principal', component: InterfazComunComponent},
  {path: 'login', component: LoginPrincipalComponent},
  {path: 'principal/menu', component: MenuHorizontalComponent },
  {path: '404page', component: PageNotFoundComponent}, 

  {path: 'principal/clientes', component: ClientesComponent },
  {path: 'clientes/RegistrarCliente', component: RegistroClienteComponent},
  {path: 'clientes/ActualizarCliente', component: ActualizacionClienteComponent},
  {path: 'clientes/ConsultarCliente', component: ConsultarClienteComponent},

  {path: 'principal/proveedores', component: ProveedoresComponent},
  {path: 'proveedores/RegistrarProveedor', component: RegistroProveedoresComponent},
  {path: 'proveedores/ActualizarProveedor', component: ActualizacionProveedorComponent},
  {path: 'proveedores/ConsultarProveedor', component: ConsultarProveedorComponent}     
  
];    

@NgModule({
  declarations: [
    AppComponent,
    InterfazComunComponent,
    MenuHorizontalComponent,
    PageNotFoundComponent,
    LoginPrincipalComponent,
    ClientesComponent,
    ProveedoresComponent,
    RegistroClienteComponent,
    RegistroProveedoresComponent,
    ConsultarClienteComponent,
    ConsultarProveedorComponent,
    ActualizacionClienteComponent,
    ActualizacionProveedorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }