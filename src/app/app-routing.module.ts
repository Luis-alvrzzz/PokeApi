import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrarse/registrarse.component';
import { PokemonTableComponent } from './paginacion/pokemon-table/pokemon-table.component';
import { PokemonListComponentComponent } from './paginacion/pokemon-list-component/pokemon-list-component.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'registrarse', component: RegisterComponent }, // Ruta para la página de registro
  { path: 'pokemon-table', component: PokemonListComponentComponent },
  { path: 'pokemon-list-component', component: PokemonTableComponent },
  { path: 'usuarios', component: UsuariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
