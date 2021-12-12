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

  // get all annonce
  public getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiServerUrl}/annonces`);
  }
  
  // get annonce by Id
  find(id: number): Observable<any> {
    return this.http.get<Annonce>(`${this.apiServerUrl}/annonces/find/` + id)
  }

  // add new annonce
  public addAnnonce(annonce: Annonce): Observable<Annonce>{
    return this.http.post<Annonce>(`${this.apiServerUrl}/annonces/add`,annonce);
  }




}
