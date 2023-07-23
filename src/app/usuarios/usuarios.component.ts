import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { UsuariosService } from './usuarios.service';
import { MatPaginator } from '@angular/material/paginator';

interface Usuario {
  foto: string;
  nombre: string;
  correo: string;
  genero: string;
  edad: number;
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  constructor(private usuariosService: UsuariosService) {}
  columns = [
    {
    columnDef: 'foto',
      header: '',
      cell: (usuario: Usuario) => `${usuario.foto}`,
    },
    {
      columnDef: 'nombre',
        header: 'Nombre',
        cell: (usuario: Usuario) => `${usuario.nombre}`,
    },
    {
      columnDef: 'correo',
      header: 'Correo',
      cell: (usuario: Usuario) => `${usuario.correo}`,
    },
    {
      columnDef: 'genero',
      header: 'genero',
      cell: (usuario: Usuario) => `${usuario.genero}`,
    },
    {
      columnDef: 'edad',
      header: 'Edad',
      cell: (usuario: Usuario) => `${usuario.edad}`,
    },
    
  ]
  dataSource!: MatTableDataSource<Usuario>;
  displayedColumns = this.columns.map(c => c.columnDef);
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Usuario>([]);
    this.dataSource.paginator = this.paginator;
    this.getUsuario();
  }
  getUsuario(): void {
    this.usuariosService.getAll().subscribe((data: any) => {
      this.dataSource.data = data.results.map((usuario: any, index: number, foto: any) => {
        return { ...usuario, 
          foto:"https://randomuser.me/api/portraits/men/"+ (index+1) +".jpg",
          nombre: `${usuario.name.first} ${usuario.name.last}`,
          correo: usuario.email,
          genero: usuario.gender,
          edad: usuario.dob.age }; // Inicializamos el ID con el valor del índice + 1
      });
    });
  }
  
}
