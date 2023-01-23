import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  prefixImg:string='https://image.tmdb.org/t/p/w500'
  trandingPeople:any[]=[]
  constructor(private _MoviesService:MoviesService) {
    _MoviesService.grtTrending('person').subscribe((data)=>{
      this.trandingPeople = data.results
    })
   }

  ngOnInit(): void {
  }

}
