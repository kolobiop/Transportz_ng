import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { TiendaComponent } from './pages/tienda/tienda.component';
import { CompanyComponent } from './pages/company/company.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
  {path: "", redirectTo:'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'tienda', component: TiendaComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'},
];
