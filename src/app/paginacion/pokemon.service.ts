import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data, Resultado } from 'src/app/interface/pokeApi';
import { map } from 'rxjs/operators'
import { Observable } from 'rxjs';
import { Pokemon } from './../interface/pokemon.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';


  constructor(private http: HttpClient) {}

  getPokemonPage(offset: number) {
    return this.http.get(`${this.apiUrl}pokemon?limit=20&offset=${offset}`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
  
  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}pokemon?limit=1000`).pipe(
      map((response: any) => {
        return response;
      })
    );
  }

  getById(id : string | number){
    let res =  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    return res;
  }
}
