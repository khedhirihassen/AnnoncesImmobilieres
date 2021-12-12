import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';

@Component({
  selector: 'app-view-annonce',
  templateUrl: './view-annonce.component.html',
  styleUrls: ['./view-annonce.component.css']
})
export class ViewAnnonceComponent implements OnInit {

  id: number;
  annonce: Annonce;

  constructor(public annonceService: AnnonceService, private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.annonceService.find(this.id).subscribe((data: Annonce)=>{
      this.annonce = data;
    });
  }

}
