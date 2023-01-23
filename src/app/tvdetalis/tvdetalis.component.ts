import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-tvdetalis',
  templateUrl: './tvdetalis.component.html',
  styleUrls: ['./tvdetalis.component.scss']
})
export class TvdetalisComponent implements OnInit {
  imgprefix='https://image.tmdb.org/t/p/w500'
  id:string='';
  tvdetalis:any={};
  genres:any=[];
  networks:any=[];
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute,private spinner: NgxSpinnerService) { 
  this.id=  _ActivatedRoute.snapshot.params.id;
  _MoviesService.tvdetalis(this.id).subscribe((data)=>{
    this.tvdetalis=data;
    this.genres=data.genres;
    this.networks=data.networks;
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
