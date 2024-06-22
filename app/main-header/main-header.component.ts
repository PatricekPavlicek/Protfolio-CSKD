import { Component } from '@angular/core';
import { SeznamAutoruButtonComponent } from '../seznam-autoru-button/seznam-autoru-button.component';
import { SeznamKnihButtonComponent } from '../seznam-knih-button/seznam-knih-button.component';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [SeznamAutoruButtonComponent, SeznamKnihButtonComponent],
  template: `
  <header>
    <h1 class="header-text">ČSKD</h1>
    <p class="header-text-small">Česko-Slovenská knižní databáze</p>
  </header>
  <section class="list-container">
    <app-seznam-knih-button></app-seznam-knih-button>
    <app-seznam-autoru-button></app-seznam-autoru-button>
  </section>
  `,
  styleUrl: './main-header.component.css'
})
export class MainHeaderComponent {

}
