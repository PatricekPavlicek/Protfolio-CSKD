import { Component, inject, OnInit } from '@angular/core';
import { AutorDTO } from '../autor-dto';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { AutorLiComponent } from '../autor-li/autor-li.component';
import { NgFor } from '@angular/common';
import { MainServiceService } from '../main-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-autor-list',
  standalone: true,
  imports: [MainHeaderComponent, AutorLiComponent, NgFor, HttpClientModule],
  template: `
  <app-main-header></app-main-header>
  <section class="container">
    <div class="heading">
      <h2 class="heading-text">Seznam autorů</h2>
      <div class="search-bar">
        <input class="search-bar-input" type="text" placeholder="Hledat" />
        <button class="search-bar-button">
          <img class="search-bar-icon" src="../assets/loupe.png" alt="search-icon" />
        </button>
      </div>
    </div>
    <ul class="list">
      <app-autor-li *ngFor="let autorDTO of autorDTOList" [autorDTO]="autorDTO"></app-autor-li>
    </ul>
  </section>
  `,
  providers: [MainServiceService],
  styleUrl: '../list-style.css'
})
export class AutorListComponent implements OnInit{
  autorDTOList: AutorDTO[] = [];

  constructor(private mainService: MainServiceService){}

  ngOnInit(): void {
    this.mainService.getAutorDTOAll().subscribe(list =>{
      this.autorDTOList = list;
    });
  }
}
