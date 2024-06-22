import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seznam-autoru-button',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <main>
  <a [routerLink]="['/autori/all']" class="container">
    <h3 class="container-header">Seznam autorů</h3>
    <img class="container-img" src="../assets/writer.png" alt="icon" />
  </a>
  <a class="create-btn" id="book" [routerLink]="['/new/autor']">
    <img class="create-btn-img" src="../assets/plus.png" alt="plus" />
  </a>
  </main>
  `,
  styleUrl: '../seznamy-button.css'
})
export class SeznamAutoruButtonComponent {

}
