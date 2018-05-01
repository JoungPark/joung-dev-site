import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AppAuthService {

  private authApiUrl = '/auth-api';  // URL to web api
  private client_id = 'fooClientIdPassword';
  private client_secret = 'secret';

  constructor(private http: HttpClient) { }

  obtainAccessToken(username, password): Observable<any> {
    const url = `${this.authApiUrl}/oauth/token`;
    // const url = `${this.authApiUrl}/login`;
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', this.client_id);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
      'Authorization': 'Basic '+btoa(this.client_id + ":" + this.client_secret) })
    };
    
    return this.http.post(url, params.toString(), httpOptions);
  }

  obtainAccessTokenSocial(id): Observable<any> {
    const url = `${this.authApiUrl}/login/social/facebook`;
    const params = new HttpParams()
      .set('id', id);
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8' })
    };
    
    return this.http.post(url, params.toString(), httpOptions);
  }

  signUp(email, password, name): Observable<any> {
    const url = `${this.authApiUrl}/users/sign-up`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    var passwordUser = new PasswordUser();
    passwordUser.email = email;
    passwordUser.password = password;
    passwordUser.name = name;

    const params = new HttpParams()
      .set('email', email)
      .set('password', password)
      .set('name', 'name');

    return this.http.post(url, passwordUser, httpOptions);
  }

  signUpSocial(socialuser: any): Observable<any> {
    const url = `${this.authApiUrl}/users/sign-up-social`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.post(url, socialuser, httpOptions);
  }

  /*
  ** Below are test code
  */
  
  public loginwithFacebook(): Observable<any> {
    const url = `${this.authApiUrl}/login/facebook`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.get(url, httpOptions)
      .pipe(
        tap(_ => this.log(`facebookLogin success`)),
        catchError(this.handleError<any>('facebookLogin fail'))
      );
  }

  obtainAccessTokenOld(username, password): Observable<any> {
    const url = `${this.authApiUrl}/oauth/token`;
    // const url = `${this.authApiUrl}/login`;
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password')
      .set('client_id', 'barClientIdPassword');
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic ' + btoa("barClientIdPassword:secret") })
    };
    
    return this.http.post(url, params.toString(), httpOptions);
  }

  test_obtainAccessToken(username, password): Observable<any>{
    const params = new HttpParams()
    .set('username','john')
    .set('password','123')  
    .set('grant_type','password')
    .set('client_id','fooClientIdPassword');

    let headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Basic '+btoa("fooClientIdPassword:secret")});
    let options = { headers: headers };

    const httpOptions = {
      headers: headers
      // , params: params
    };

    return this.http.post('http://localhost:8081/spring-security-oauth-server/oauth/token', params, httpOptions)
    // .map(res => res.json())
    // .subscribe(
    //   data => {
    //     this.saveToken(data);
    //     console.log("success");
    //   },
    //   err => alert('Invalid Credentials')
    // ); 
  }

  facebookLogin(socialuser: any): Observable<any> {
    const url = `${this.authApiUrl}/facebookLogin`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(url, socialuser, httpOptions)
      .pipe(
        tap(_ => this.log(`facebookLogin=${socialuser.name}`)),
        catchError(this.handleError<any>('facebookLogin'))
      );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('AuthService: ' + message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error('error:' + error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}

class PasswordUser {
  public email: String;
  public password: String;
  public name: String;
}