import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './registrarse/registrarse.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeaderComponent } from './header/header.component'; // Ruta al componente HeaderComponent
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from './servicios/auth.service'; // Importa el AuthService
import { PokemonListComponentComponent } from './paginacion/pokemon-list-component/pokemon-list-component.component';
import { PokemonTableComponent } from './paginacion/pokemon-table/pokemon-table.component';
import { PokemonService } from './paginacion/pokemon.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { UsuariosComponent } from './usuarios/usuarios.component';
import {MatMenuModule} from '@angular/material/menu';

const routes: Routes = [
 
  { path: 'login', component: LoginComponent }, // Ruta para la página de inicio de sesión
  { path: 'register', component: RegisterComponent }, // Ruta para la página de registro
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta predeterminada: redirige a la página de inicio de sesión
  { path: '**', redirectTo: 'login', pathMatch: 'full' }, // Ruta de página no encontrada: también redirige a la página de inicio de sesión
  { path: 'pokemon-table', component: PokemonTableComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    PokemonListComponentComponent,
    PokemonTableComponent,
    RegisterComponent,
    LoginComponent,
    UsuariosComponent
  ],
  imports: [
    BrowserModule,
    MatDividerModule,
    FormsModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule
  ],

  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
    // Otros módulos de Angular Material que puedas necesitar
  ],
  providers: [PokemonService,AuthService],
  bootstrap: [AppComponent,HeaderComponent]
})
export class AppModule { }
