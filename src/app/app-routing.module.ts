import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { FomularioLoginComponent } from './fomulario-login/fomulario-login.component';


// const routes: Routes = [
//   { path: '', component: FomularioLoginComponent },
//   { path: 'pagina-principal', component: PaginaPrincipalComponent }

// ];
const routes: Routes = [
  { path: 'login', component: FomularioLoginComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
