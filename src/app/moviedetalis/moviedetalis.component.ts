import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-moviedetalis',
  templateUrl: './moviedetalis.component.html',
  styleUrls: ['./moviedetalis.component.scss']
})
export class MoviedetalisComponent implements OnInit {
  imgprefix = 'https://image.tmdb.org/t/p/w500';
  genres: any = [];
  marvel: any = [];
  moviedetalis: any = {};
  id: string = '';
  constructor(private _ActivatedRoute: ActivatedRoute, private _MoviesService: MoviesService, private spinner: NgxSpinnerService) {

    this.id = _ActivatedRoute.snapshot.params.id;

    _MoviesService.moviedetalis(this.id).subscribe((data) => {

      this.moviedetalis = data;
      this.genres = data.genres;
      this.marvel = data.production_companies;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
    })
  }

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinner.show();


  }

}
