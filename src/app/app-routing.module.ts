import { LoginComponent } from './auth/login.component';
import { UpdateComponent } from './product/update.component';
import { CreateComponent } from './product/create.component';
import { DetailComponent } from './product/detail.component';
import { ListComponent } from './product/list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './auth/register.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { LoginGuard } from './guards/login.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
  { path: '', component: ListComponent, canActivate: [HomeGuard] },
  { path: 'detail/:id', component: DetailComponent, canActivate: [UsuarioGuard, HomeGuard], data: { expectedRoles: ['admin', 'user','recepcionista']} },
  { path: 'create', component: CreateComponent, canActivate: [UsuarioGuard, HomeGuard], data: { expectedRoles: ['admin','recepcionista']}  },
  { path: 'update', component: UpdateComponent, canActivate: [UsuarioGuard, HomeGuard], data: { expectedRoles: ['admin','recepcionista']} },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuard]},
  { path: 'register', component: RegisterComponent, canActivate: [UsuarioGuard, HomeGuard],data: { expectedRoles: ['admin']} },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
