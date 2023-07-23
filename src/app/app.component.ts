import { Component } from '@angular/core';
import { PokemonService } from './paginacion/pokemon.service';
import { AuthService } from './servicios/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public pokemonList: any[] = [];
  public displayedPokemon: any[] = [];
  public currentPage: number = 0;
  public totalPages: number = 0;

  constructor(private pokemonService: PokemonService, public authService: AuthService) {}

   // Método para cerrar sesión
   onLogout() {
    this.authService.logout();
}
}
