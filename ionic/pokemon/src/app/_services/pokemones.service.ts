import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {

  constructor(
    private http: HttpClient
  ){ }

  getPokemones(){
    return this.http.get<any>('http://localhost:3000/pokemones');
  }

  getPokemonById(pokemon_id: any){
    return this.http.get<any>(`http://localhost:3000/pokemones/${pokemon_id}`);
  }

  insertPokemon(pokemon:any){
    return this.http.post<any>('http://localhost:3000/pokemones',pokemon);
  }

  updatePokemon(pokemon_id : any, pokemon:any){
    return this.http.put<any>(`http://localhost:3000/pokemones/${pokemon_id}`, pokemon);
  }

  deletePokemon(pokemon_id: any){
    return this.http.delete<any>(`http://localhost:3000/pokemones/${pokemon_id}`);
  }
}
