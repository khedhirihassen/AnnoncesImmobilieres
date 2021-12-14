import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AnnonceService } from '../services/annonce.service';
import { Annonce } from '../models/annonce';
import { HttpErrorResponse, HttpClient, HttpEventType } from '@angular/common/http';

@Component({
  encapsulation: ViewEncapsulation.Emulated,
  selector: 'app-add-annonce',
  templateUrl: './add-annonce.component.html',
  styleUrls: ['./add-annonce.component.css']
})
export class AddAnnonceComponent implements OnInit {
  constructor(public annonceService: AnnonceService, private router: Router, private route: ActivatedRoute) {
  }
  userFile: any;
  public imagePath: any;
  imgURL: any;
  public message: string;

  ngOnInit(): void {
  }

  addData(addForm: NgForm) {
    const formData: FormData = new FormData();
    formData.append("titre", addForm.value.titre);
    formData.append("description", addForm.value.description);
    formData.append("prix", addForm.value.prix);
    formData.append('file', this.userFile);
    this.annonceService.addAnnonce(formData).subscribe(data => {

      this.router.navigate(['']);
    });
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.userFile = file;
      // this.f['profile'].setValue(file);

      var mimeType = event.target.files[0].type;
      if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        return;
      }

      var reader = new FileReader();

      this.imagePath = file;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgURL = reader.result;
      }
    }


  }

}
