import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuarioGuard implements CanActivate {

  realRol!: string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean {
    const expectedRoles = route.data.expectedRoles;
    this.realRol = this.tokenService.isAdmin() ? 'admin' : (this.tokenService.isRecepcionista() ? 'recepcionista' : 'supervisor');
    if (!this.tokenService.isLogged() || expectedRoles.indexOf(this.realRol) < 0) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }

}
