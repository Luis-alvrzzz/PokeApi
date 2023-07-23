import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserName: string | null = null; // Variable para almacenar el nombre de usuario logueado
  private valor: any;
  constructor() {}

  setValor(valor: any): void {
    this.valor = valor;
  }

  getValor(): any {
    return this.valor;
  }

  // Método para realizar el inicio de sesión y almacenar el nombre de usuario
  login(email: string) {
    // Aquí puedes realizar la lógica real de inicio de sesión, como enviar una solicitud al servidor y autenticar al usuario.
    // Por ahora, simplemente almacenamos el email como nombre de usuario para este ejemplo.
    this.loggedInUserName = email;
  }

  // Método para obtener el nombre de usuario logueado
  getLoggedInUserName(): string | null {
    return this.loggedInUserName;
  }

  // Método para verificar si hay un usuario logueado
  isLoggedIn(): boolean {
    return this.loggedInUserName !== null;
  }

  // Método para cerrar sesión y borrar el nombre de usuario almacenado
  logout() {
    this.loggedInUserName = null;
  }
}
