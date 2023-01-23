import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  prefixImg:string='https://image.tmdb.org/t/p/w500'
  tarndingMovies:any[]=[];
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.grtTrending('movie').subscribe((data)=>{
    this.tarndingMovies = data.results
    })
   }

  ngOnInit(): void {
  }

}
