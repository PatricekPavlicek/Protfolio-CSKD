import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-seznam-knih-button',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
  <main>
  <a class="container" [routerLink]="['/knihy/all']">
    <h3 class="container-header">Seznam knih</h3>
    <img class="container-img" src="../assets/books.png" alt="icon" />
  </a>
  <a class="create-btn" id="book" [routerLink]="['/new/kniha']">
    <img class="create-btn-img" src="../assets/plus.png" alt="plus" />
  </a>
  </main>
  `,
  styleUrl: '../seznamy-button.css'
})
export class SeznamKnihButtonComponent {

}
