import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {
  prefixImg:string='https://image.tmdb.org/t/p/w500'
  trandingTv:any[]=[]
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.grtTrending('tv').subscribe((data)=>{
      this.trandingTv = data.results
    })
   }

  ngOnInit(): void {
  }

}
