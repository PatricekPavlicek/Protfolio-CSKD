import { Injectable } from '@angular/core';
import { KnihaDTO } from './kniha-dto';
import { AutorDTO } from './autor-dto';
import { NewKnihaDTO } from './new-kniha-dto';
import { NewAutorDTO } from './new-autor-dto';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZanrDTO } from './zanr-dto';

@Injectable({providedIn: 'root'})
export class MainServiceService {

  url = '/api/knihovna';

  constructor(private http : HttpClient) {}

  getKnihaDTOAll(): Observable<KnihaDTO[]> {
    return this.http.get<KnihaDTO[]>(this.url + '/knihy/all');
  }

  getKnihaDTOById(id: number): Observable<KnihaDTO | undefined>{
    return this.http.get<KnihaDTO>(this.url + `/knihy/${id}`);
  }

  createNewKnihaDTO(newKnihaDTO: NewKnihaDTO): KnihaDTO | undefined{
    console.log('SENDING: ' + newKnihaDTO);
    this.http.post<NewKnihaDTO>(this.url + '/knihy/new', newKnihaDTO).subscribe({
      next: data =>{
        console.log('RESPONSE: ' + data + 'úspěšně vytvořeno');
        return data;
      },
      error: error =>{
        console.log('ERROR: ' + error.message);
      }
    });
    return undefined;
  }

  getAutorDTOAll(): Observable<AutorDTO[]>{
    return this.http.get<AutorDTO[]>(this.url + '/autori/all');
  }

  getAutorDTOById(id: number): Observable<AutorDTO | undefined>{
    return this.http.get<AutorDTO>(this.url + `/autori/${id}`);
  }

  createNewAutorDTO(newAutorDTO: NewAutorDTO): AutorDTO | undefined{
    console.log('SENDING: ' + newAutorDTO);
    this.http.post<NewAutorDTO>(this.url + '/autori/new', newAutorDTO).subscribe({
      next: data =>{
        console.log('RESPONSE: ' + data + 'úspěšně vytvořeno');
        return data;
      },
      error: error =>{
        console.log('ERROR: ' + error.message);
      }
    })
    return undefined;
  }

  getZanrAll(): Observable<ZanrDTO[]>{
    return this.http.get<ZanrDTO[]>(this.url + '/zanry/all');
  }

  createNewZanr(newZanr: ZanrDTO): ZanrDTO | undefined{
    console.log('SENDING: ' + newZanr);

    this.http.post<ZanrDTO>(this.url + '/zanry/new', newZanr).subscribe({
      next: data=>{
        console.log('RESPONSE: ' + data + 'úspěšně vytvořeno');
        return data;
      },
      error: error =>{
        console.log('ERROR: ' + error.message);
      }
    })

    return undefined;
  }
}
