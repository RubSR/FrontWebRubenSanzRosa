import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CharactersResponse} from "../../models/CharactersResponse";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FetchService {

  constructor(private http: HttpClient ) {}


  public fetchCharacters(url: string): Observable<CharactersResponse>{

    return this.http.get<CharactersResponse>(url)
  }


}
