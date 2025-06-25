import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-fomulario-login',
  standalone: false,
  templateUrl: './fomulario-login.component.html',
  styleUrl: './fomulario-login.component.scss'
})
export class FomularioLoginComponent {

  constructor(private router: Router){}

  login() {
  // Aqui você pode validar o email/senha se quiser
  // Depois redireciona:
  this.router.navigate(['/pagina-principal']);
}

}
