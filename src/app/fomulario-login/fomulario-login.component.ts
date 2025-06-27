import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CREDENCIAIS } from '../../app/segredo-login'; // Ajuste o caminho se necessário


@Component({
  selector: 'app-fomulario-login',
  standalone: false,
  templateUrl: './fomulario-login.component.html',
  styleUrl: './fomulario-login.component.scss'
})
export class FomularioLoginComponent {

 username: string = '';
  password: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === CREDENCIAIS.username && this.password === CREDENCIAIS.password) {
      this.router.navigate(['/pagina-principal']);
    } else {
      alert('Acesso negado: login ou senha inválidos');
    }
  }



}
