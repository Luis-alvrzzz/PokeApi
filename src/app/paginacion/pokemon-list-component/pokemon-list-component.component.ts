import { Component, HostListener, Input } from '@angular/core';
import { PokemonService } from './../pokemon.service';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.component.html',
  styleUrls: ['./pokemon-list-component.component.css'],
  
})
export class PokemonListComponentComponent {
  public pokemonList: any[] = [];
  public displayedPokemon: any[] = [];
  public currentPage: number = 0;
  public totalPages: number = 0;
  public pages: number[] = [];
  public id:number = 0;
  paginationStyle: any = {};

  constructor(private pokemonService: PokemonService) {}

  @HostListener('window:resize')
  onWindowResize() {
    this.setPaginationStyle();
  }

  ngOnInit() {
    this.getPokemonPage(0); // Obtener la primera página de Pokémon al cargar el componente
    this.setPaginationStyle();
  }

  getPokemonPage(offset: number) {
    this.pokemonService.getPokemonPage(offset).subscribe((data) => {
      this.pokemonList = data.results;
      this.totalPages = Math.ceil(data.count / 20); // Calcular el número total de páginas
      this.displayedPokemon = this.pokemonList;
      
      this.updatePageNumbers();
    });
  }



  updatePageNumbers() {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
  }

  goToPage(page: number) {
    this.id = 0
    if (page >= 0 && page < this.totalPages) {
      this.currentPage = page;
      this.getPokemonPage(this.currentPage * 20);
      this.id = page*20
      console.log(page)
    }
  }

  setPaginationStyle() {
    const paginationContainer = document.querySelector('.pagination-container');
    if (paginationContainer) {
      const containerWidth = paginationContainer.clientWidth;
      const paginationWidth = this.pages.length * 40; // Ancho estimado de cada enlace
      this.paginationStyle = { width: `${paginationWidth}px` };

      // Calcula la página seleccionada para centrarla en el contenedor
      const centerPage = Math.floor((containerWidth - 40) / 80);
      this.goToPage(this.currentPage + centerPage);
    }
  }

  //Primera letra en mayusculas
  firstLetterToUppercase(str: string): string {
    if (str.length === 0) return str;
    return str.charAt(0).toUpperCase() + str.substring(1);
  }
}
