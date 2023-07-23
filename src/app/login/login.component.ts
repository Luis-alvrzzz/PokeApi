import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoading: boolean = false;
  loginData = {
    email: '',
    password: '',
  };
  valorCapturado: any;
  constructor(private router: Router,private authService: AuthService) {}
  

  ngOnInit(): void {}

  enviarValor(): void {
    this.authService.setValor(this.valorCapturado);
  }

  login() {
    // Perform any additional validation here if needed
    if (!this.loginData.email || !this.loginData.password) {
      return;
    }
    
    
    this.isLoading = true;
    setTimeout(() => {
      this.authService.login(this.loginData.email); // Guarda el nombre de usuario logueado en el servicio
      this.isLoading = false;
      this.router.navigate(['/pokemon-table'])
      
    }, 2000);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
