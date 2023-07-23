
import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Pokemon } from './../../interface/pokemon.model';
import { Resultado } from './../../interface/pokeApi';

 
@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css']
})
export class PokemonTableComponent {
  constructor(private pokemonService: PokemonService) {}
  columns = [
    {
    columnDef: 'id',
      header: 'Id',
      cell: (pokemon: Pokemon) => `${pokemon.id}`,
    },
    {
      columnDef: 'img',
        header: '',
        cell: (pokemon: Pokemon) => `${pokemon.img}`,
    },
    {
      columnDef: 'name',
      header: 'Name',
      cell: (pokemon: Pokemon) => `${pokemon.name}`,
    },
    
  ]
  dataSource!: MatTableDataSource<Pokemon>;
  displayedColumns = this.columns.map(c => c.columnDef);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;



  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Pokemon>([]);
    this.dataSource.paginator = this.paginator;
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getAll().subscribe((data: any) => {
      this.dataSource.data = data.results.map((pokemon: any, index: number, img: any) => {
        return { ...pokemon, 
          id: index + 1, 
          img:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ (index+1) +".png" }; // Inicializamos el ID con el valor del índice + 1
      });
    });
  }
  


}
