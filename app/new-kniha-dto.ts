import { AutorDTO } from "./autor-dto";

export interface NewKnihaDTO {
    autorDTO: AutorDTO;
    zanr: string;
    nazev: string;
    pocetStran: number;
    datumVydani: Date;
    vydani: number;
}