import { Component, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { MainServiceService } from '../main-service.service';
import { AutorDTO } from '../autor-dto';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ZanrDTO } from '../zanr-dto';

@Component({
  selector: 'app-new-kniha-page',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgFor, CommonModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './new-kniha-page.component.html',
  providers: [MainServiceService],
  styleUrl: '../form-style.css'
})
export class NewKnihaPageComponent implements OnInit {
  autorDTOList: AutorDTO[] = [];
  zanrList: ZanrDTO[] = [];

  form = new FormGroup({
    nazev: new FormControl(),
    vydani: new FormControl(),
    pocetStran: new FormControl(),
    zanr: new FormControl(),
    datumVydani: new FormControl(),
    autor: new FormControl()
  });

  submit(){
    console.log(this.form.value.autor);
    this.mainService.createNewKnihaDTO(
      {
        autorDTO: this.form.value.autor,
        zanr: this.form.value.zanr,
        nazev: this.form.value.nazev,
        pocetStran: this.form.value.pocetStran,
        datumVydani: this.form.value.datumVydani,
        vydani: this.form.value.vydani
      }
    );
  }

  constructor(private mainService: MainServiceService){}

  ngOnInit(): void {
    this.mainService.getAutorDTOAll().subscribe(list => {
      this.autorDTOList = list;
    })

    this.mainService.getZanrAll().subscribe(list => {
      this.zanrList = list;
    })
  }
}