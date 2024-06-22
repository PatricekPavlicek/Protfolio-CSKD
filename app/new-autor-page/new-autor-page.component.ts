import { CommonModule } from '@angular/common';
import { Component,  } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MainServiceService } from '../main-service.service';
import { HttpClientModule } from '@angular/common/http';
import { MainHeaderComponent } from '../main-header/main-header.component';

@Component({
  selector: 'app-new-autor-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, MainHeaderComponent],
  template: `
  <form [formGroup]="form" (submit)="submit()">
        <div class="form-heading">
      <img class="form-heading-icon" src="../../assets/book.png" />
      <p class="form-heading-text">Nový autor</p>
    </div>

    <div class="input-box text-input">
    <label for="fname">Jméno</label>
    <input type="text" name="fname" id="fname" formControlName="jmeno" />
    </div>

    <div class="input-box text-input">
    <label for="lname">Příjmení</label>
    <input type="text" name="lname" id="lname" formControlName="prijmeni" />
    </div>

    <div class="input-box">
    <label for="bdate">Datum narození</label>
    <input type="date" name="bdate" id="bdate" formControlName="datumNarozeni" />
    </div>

    <input class="submit-button" type="submit" name="submit" id="submit" />
  </form>
  `,
  providers: [MainServiceService, HttpClientModule],
  styleUrl: '../form-style.css'
})
export class NewAutorPageComponent {
  form = new FormGroup({
    jmeno: new FormControl(),
    prijmeni: new FormControl(),
    datumNarozeni: new FormControl()
  });

  submit(){
    this.mainService.createNewAutorDTO(
      {
        jmeno: this.form.value.jmeno,
        prijmeni: this.form.value.prijmeni,
        datumNarozeni: this.form.value.datumNarozeni
      }
    );
  }

  constructor(private mainService: MainServiceService) {}
}
