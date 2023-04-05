import { Router } from '@angular/router';
import { TokenService } from './../services/token.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  isLogged:boolean=false;
  isAdmin: boolean=false;
  isRecepcionista: boolean=false;
  username!:string;
  URL!: string;
  roles!:string;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged=this.tokenService.isLogged();
    this.isAdmin = this.tokenService.isAdmin();
    this.isRecepcionista = this.tokenService.isRecepcionista();
    this.username = this.tokenService.getUsername();
  }

  logOut(): void {
    this.tokenService.logOut();
    this.router.navigate(['/login']);
  }

}
