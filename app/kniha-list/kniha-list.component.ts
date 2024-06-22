import { Component, inject } from '@angular/core';
import { AutorDTO } from '../autor-dto';
import { KnihaDTO } from '../kniha-dto';
import { KnihaLiComponent } from '../kniha-li/kniha-li.component';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { NgFor } from '@angular/common';
import { MainServiceService } from '../main-service.service';
import { OnInit } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { subscribe } from 'diagnostics_channel';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-kniha-list',
  standalone: true,
  imports: [KnihaLiComponent, NgFor, MainHeaderComponent, HttpClientModule],
  template: `
  <app-main-header></app-main-header>
  <section class="container">
    <div class="heading">
      <h2 class="heading-text">Seznam knih</h2>
      <div class="search-bar">
        <input class="search-bar-input" type="text" placeholder="Hledat" />
        <button class="search-bar-button">
          <img class="search-bar-icon" src="../assets/loupe.png" alt="search-icon" />
        </button>
      </div>
    </div>
    <ul class="list">
      <app-kniha-li *ngFor="let knihaDTO of knihaDTOList" [knihaDTO]="knihaDTO"></app-kniha-li>
    </ul>
  </section>
  `,
  providers: [MainServiceService],
  styleUrl: '../list-style.css'
})
export class KnihaListComponent implements OnInit {
  knihaDTOList: KnihaDTO[] = [];

  constructor(private mainService: MainServiceService){}

  ngOnInit(): void {
    this.mainService.getKnihaDTOAll().subscribe(list => {
      this.knihaDTOList = list;
    })
  }
}
