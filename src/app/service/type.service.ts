import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Globals} from '../globals';
import {Type} from '../class/type';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class TypeService {
    constructor(private http: HttpClient) { }
    uri = Globals.APP_API + 'type/';
    private log(log: string) {
        // tslint:disable-next-line:no-console
        console.info(log);
    }
    getType(id: string) {
        return this.http.get(`${this.uri}${id}`);
    }
    public getTypes() {
        return this.http.get<Type[]>(`${this.uri}`);
    }
    public createType(name: string) {
        const data = { name };
        return this.http.post(`${this.uri}new`, data);
    }
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(error);
            console.log(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }
    deleteType(type: Type): Observable<Type> {
        const url = `${this.uri}${type.id}`;
        const httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
        return this.http.delete<Type>(url, httpOptions).pipe(
            tap(_ => this.log('deleted type id=${type.id}')),
            catchError(this.handleError<Type>('deleteType'))
        );
    }
    editType(id: number, name: string) {
        const data = { name };

        return this.http.put(`${this.uri}${id}`, data);
    }
    public getAssocsByType() {
        return this.http.get(`${Globals.APP_API}type/assocs`);
    }
}
