import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  standalone: false,
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.scss'
})

export class PaginaPrincipalComponent {

  constructor(private router: Router){}
}
