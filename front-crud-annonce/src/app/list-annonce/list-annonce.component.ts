import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
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

  constructor(private annonceService: AnnonceService) { }

  ngOnInit(): void {
    this.getAnnonces();
  }

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

}
