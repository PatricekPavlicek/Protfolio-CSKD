import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from './main-header/main-header.component';
import { KnihaListComponent } from './kniha-list/kniha-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, MainHeaderComponent, KnihaListComponent],
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'homes';
}
