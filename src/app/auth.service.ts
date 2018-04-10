import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  private authApiUrl = '/auth-api';  // URL to web api
  
  constructor(private http: HttpClient) { }

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
