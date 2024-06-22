import { AutorDTO } from "./autor-dto";

export interface KnihaDTO {
    knihaId: number;
    autorDTO: AutorDTO;
    zanr: string;
    nazev: string;
    pocetStran: number;
    datumVydani: Date;
    vydani: number;
}