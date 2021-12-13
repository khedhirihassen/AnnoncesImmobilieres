import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse , HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Annonce } from '../models/annonce';
import { AnnonceService } from '../services/annonce.service';

@Component({
  selector: 'app-list-annonce',
  templateUrl: './list-annonce.component.html',
  styleUrls: ['./list-annonce.component.css']
})
export class ListAnnonceComponent implements OnInit {
  p = 1;
  public annonces: Annonce[];
  message: string;
  
  constructor(public annonceService: AnnonceService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAnnonces();
  }
  // methode pour retourner tous les annonces existant
  public getAnnonces(): void {
    this.annonceService.getAnnonces().subscribe(
      (response: Annonce[]) => {
        this.annonces = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // methode pour chercher un annonce par titre
  public searchAnnonce(key: string): void {
    const results: Annonce[] = [];
    for (const annonce of this.annonces) {
      if (annonce.titre.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
        results.push(annonce);
      }
    }
    this.annonces = results;
    if (results.length === 0 || !key) {
      this.getAnnonces();
    }
  }

}
