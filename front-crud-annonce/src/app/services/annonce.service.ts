import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  public getAnnonces(): Observable<Annonce[]>{
    return this.http.get<Annonce[]>(`${this.apiServerUrl}/annonces`);
  }



}
