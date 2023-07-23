import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  
  getAll(): Observable<any> {
    return this.http.get(`https://randomuser.me/api/?results=50`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
