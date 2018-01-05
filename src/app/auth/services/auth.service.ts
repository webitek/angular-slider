import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private authUrl: string = 'https://reqres.in/api';
  private loggedIn: boolean = false;
  public useRole: string = '';
  constructor(private http: HttpClient) {
    // при обновлении страницы смотрим в localStorage чтоб проверить есть ли токен
    this.loggedIn = !!localStorage.getItem('auth_token');
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  // getRole() {
  //   if (true) {
  //     this.useRole = 'user';
  //   } else if ('false') {
  //     this.useRole = 'admin';
  //   }
  //   return this.useRole
  // }

  login(username: string, password: string): Observable<Object> {

      return this.http.post(`${this.authUrl}/login`, {username, password})
        // 2 попытки
				.retry(2)
				.map(res => res as any || [])
				.do(res => {
          if (res.token) {
            localStorage.setItem('auth_token', res.token)
            this.loggedIn = true;
          }
				})
        // .catch(this.handleError)
  }

  logout() {
    localStorage.removeItem('auth_token');
    this.loggedIn = false;
  }

  // private handleError(err) {
  //   let errMessage: string;
	//
  //   if (err instanceof Response) {
  //     let body   = err.json() || '';
  //     let error  = body.error || JSON.stringify(body);
  //     errMessage = `${err.status} - ${err.statusText || ''} ${error}`;
  //   } else {
  //     errMessage = err.message ? err.message : err.toString();
  //   }
	//
  //   return Observable.throw(errMessage);
  // }

}
