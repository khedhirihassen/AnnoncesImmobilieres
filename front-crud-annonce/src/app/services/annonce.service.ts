import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annonce } from '../models/annonce';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  public apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  // get all annonce
  public getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(`${this.apiServerUrl}/annonces`);
  }
  
  // get annonce by Id
  find(id: number): Observable<any> {
    return this.http.get<Annonce>(`${this.apiServerUrl}/annonces/find/` + id)
  }

  // Ajouter nouveau annonce
  addAnnonce(formData: FormData): Observable<any> {
    return this.http.post(`${this.apiServerUrl}/annonces/add`, formData);
  }

  // Pour uploader l'image 
  uploadFile(file: File): Observable<HttpEvent<{}>> {
		const formdata: FormData = new FormData();
		formdata.append('file', file);
		const req = new HttpRequest('POST', '<Server URL of the file upload>', formdata, {
			  reportProgress: true,
			  responseType: 'text'
		});
	
		return this.http.request(req);
   }




}
