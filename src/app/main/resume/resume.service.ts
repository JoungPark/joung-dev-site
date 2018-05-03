import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ResumeService {

  private resumeApiUrl = '/resume-api';  // URL to web api
  
  constructor(private http: HttpClient) { }

  /** GET hero by id. Will 404 if id not found */
  getProfile(): Observable<any> {
    const url = `${this.resumeApiUrl}/profile/read`;

    var accessTokenString = sessionStorage.getItem('jwt_access_token');   

    var headers = new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 'Authorization': 'Bearer '+ accessTokenString});

    let params = new HttpParams().set("userId","12345");
    return this.http.get<any>(url, {headers: headers, params: params})
      .pipe(
      tap(_ => this.log(`fetched`)),
      catchError(this.handleError<any>(`getHero`))
      );
  }
  /** PUT: update the profile on the server */
  updateProfile(profile: any): Observable<any> {
    const url = `${this.resumeApiUrl}/profile/update`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    console.log("updateProfile " + url);
    console.log(profile);

    return this.http.put(url, profile, httpOptions)
      .pipe(
      tap(_ => this.log(`updated hero id=${profile.firstName}`)),
      catchError(this.handleError<any>('updateHero'))
      );
  }
  /** POST: add a new hero to the server */
  addHero(hero: any): Observable<any> {
    const url = `${this.resumeApiUrl}/hero`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(url, hero, httpOptions).pipe(
      tap((hero: any) => this.log(`added hero w/ id=${hero.id}`)),
      catchError(this.handleError<any>('addHero'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(hero: any | number): Observable<any> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.resumeApiUrl}/hero/${id}`;
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.delete<any>(url, httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<any>('deleteHero'))
    );
  }

  /* GET heroes whose name contains search term */
  searchHeroes(term: string): Observable<any[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<any[]>(`api/heroes/?name=${term}`).pipe(
      tap(_ => this.log(`found heroes matching "${term}"`)),
      catchError(this.handleError<any[]>('searchHeroes', []))
    );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log('ProfileService: ' + message);
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
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
