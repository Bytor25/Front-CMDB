import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorldComponent } from './hello-world/hello-world.component';
import { BotonesComponent } from './botones/botones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { BuclesComponent } from './bucles/bucles.component';
import { SwitchComponent } from './switch/switch.component';
import { PantallaPrincipalComponent } from './pantalla-principal/pantalla-principal.component';
import { InventarioComponent } from './inventario/inventario.component';
import { CuentasPorPagarComponent } from './cuentas-por-pagar/cuentas-por-pagar.component';
import { VentaComponent } from './venta/venta.component';
import { CarteraComponent } from './cartera/cartera.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { GarantiaComponent } from './garantia/garantia.component';

const routes: Routes = [
{path: '', redirectTo: '/pantalla-principal',pathMatch:'full'},
];
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    BotonesComponent,
    FormularioComponent,
    BuclesComponent,
    SwitchComponent,
    PantallaPrincipalComponent,
    InventarioComponent,
    CuentasPorPagarComponent,
    VentaComponent,
    CarteraComponent,
    ClientesComponent,
    ProveedoresComponent,
    GarantiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
