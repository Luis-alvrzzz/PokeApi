import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './Registrarse.component.html',
  styleUrls: ['./Registrarse.component.css'],
})
export class RegisterComponent implements OnInit {
  isLoading: boolean = false;
  registerData = {
    email: '',
    password: '',
    confirmPassword: '', // Agregar el campo confirmPassword aquí
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  register() {
    // Realiza cualquier validación adicional aquí si es necesario
    if (
      !this.registerData.email ||
      !this.registerData.password ||
      !this.registerData.confirmPassword // Asegúrate de incluir confirmPassword en la validación
    ) {
      return;
    }

    // Validar si las contraseñas coinciden
    if (this.registerData.password !== this.registerData.confirmPassword) {
      // Mostrar un mensaje de error o realizar alguna acción
      console.log('Las contraseñas no coinciden.');
      return;
    }

    this.isLoading = true;
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 2000);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}