import { Component, Input } from '@angular/core';
import { AutorDTO } from '../autor-dto';
import { RouterLink, RouterOutlet } from '@angular/router'

@Component({
  selector: 'app-autor-li',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  template: `
  <li>
    <a class="autor-link" [routerLink]="['/autori', autorDTO.autorId]">
     <p class="autor-text">{{ autorDTO.jmeno }} {{ autorDTO.prijmeni }}</p>
    </a>
  </li>
  `,
  styleUrl: './autor-li.component.css'
})
export class AutorLiComponent {
  @Input() autorDTO!: AutorDTO;
}
