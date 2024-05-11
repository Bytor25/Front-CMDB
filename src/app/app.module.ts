import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule}  from '@ng-select/ng-select';
import axios from 'axios';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';





import { ClientesComponent } from './clientes/clientes.component';

import { InterfazComunComponent } from './interfaz-comun/interfaz-comun.component';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';

import { RegistroClienteComponent } from './registro-cliente/registro-cliente.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', component: MenuHorizontalComponent },
  { path: 'clientes', component: ClientesComponent },
  {path: 'RegistrarCliente', component: RegistroClienteComponent},
  {path: '404page', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    InterfazComunComponent,
    MenuHorizontalComponent,
  
    RegistroClienteComponent,
        PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    FormsModule,
    NgSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
