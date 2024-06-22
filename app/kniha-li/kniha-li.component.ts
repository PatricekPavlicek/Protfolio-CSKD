import { Component, Input } from '@angular/core';;
import { KnihaDTO } from '../kniha-dto';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-kniha-li',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <li>
      <a class="kniha-link" [routerLink]="['/knihy', knihaDTO.knihaId]">
        <p class="kniha-text"> {{ knihaDTO.nazev }}</p>
      </a>
      <a class="autor-link" [routerLink]="['/autori', knihaDTO.autorDTO.autorId]">
        <p class="autor-text"> Autor: {{ knihaDTO.autorDTO.jmeno }} {{ knihaDTO.autorDTO.prijmeni }}</p>
      </a>
    </li>
  `,
  styleUrl: './kniha-li.component.css'
})

export class KnihaLiComponent {
  @Input() knihaDTO!: KnihaDTO;
}