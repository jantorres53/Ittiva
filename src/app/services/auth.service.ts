import { CreateUserDto } from './../model/create-user-dto';
import { Observable } from 'rxjs';
import { LoginUserDto } from './../model/login-user-dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtTokenDto } from '../model/jwt-token-dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.apiResrURL + '/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(dto: LoginUserDto): Observable<JwtTokenDto> {
    return this.httpClient.post<JwtTokenDto>(this.authURL + 'login', dto);
  }

  public register(dto: CreateUserDto): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'create', dto);
  }
}
