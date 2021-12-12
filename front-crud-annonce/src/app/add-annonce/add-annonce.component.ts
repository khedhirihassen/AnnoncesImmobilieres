import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  constructor(public annonceService: AnnonceService, private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
  }
 
  public onAddAnnonce(addForm: NgForm): void {
    this.annonceService.addAnnonce(addForm.value).subscribe(
      (response: Annonce)=>{
        addForm.reset();
        this.router.navigateByUrl('');
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

}
