import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  emailCopiado = false;

  constructor(private clipboard: Clipboard){}

  copiarEmail() {
    this.clipboard.copy('rodrigoyukimide00@gmail.com');
    this.emailCopiado = true;
    setTimeout(() => this.emailCopiado = false, 2000);
  }

}
