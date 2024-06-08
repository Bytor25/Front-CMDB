import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuHorizontalComponent } from './menu-horizontal/menu-horizontal.component';

const routes: Routes = [
  { path: 'principal', component: MenuHorizontalComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
