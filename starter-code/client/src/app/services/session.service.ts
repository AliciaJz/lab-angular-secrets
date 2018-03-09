import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { HttpModule, Http } from '@angular/http';


@Injectable()
export class SessionService {
  base_URL='http://localhost:3000/api/';
  options= { withCredentials: true }
  constructor(private http: Http) { }

  handleError(e){
    return Observable.throw(e.json().message)
  }

  login(username, password) {
    return this.http.post(`${this.base_URL}/login`, {username, password}, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err))
  }

  signup(formSignup): Observable<any> {
    return this.http.post(`${this.base_URL}/login`, formSignup, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err))
  }

  loggedIn(): Observable<any> {
    return this.http.get(`${this.base_URL}/loggedin`, this.options)
    .map(res => res.json())
    .catch(err => this.handleError(err))
  }
  logout(){
    return this.http.post(`${this.base_URL}/logout`, this.options)
  }
}
