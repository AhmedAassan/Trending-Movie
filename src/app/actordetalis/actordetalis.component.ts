import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-actordetalis',
  templateUrl: './actordetalis.component.html',
  styleUrls: ['./actordetalis.component.scss']
})
export class ActordetalisComponent implements OnInit {
  actordetalis:any={};
  imgprefix:string='https://image.tmdb.org/t/p/w500';
  id:string='';
  constructor(private _MoviesService:MoviesService,private _ActivatedRoute:ActivatedRoute,private spinner: NgxSpinnerService) {
   this.id= _ActivatedRoute.snapshot.params.id;
    _MoviesService.actordetalis(this.id).subscribe((data)=>{
      this.actordetalis= data;
      setTimeout(() => {
        /** spinner ends after 5 seconds */
        this.spinner.hide();
      }, 500);
    })
   }

  ngOnInit(): void {
    this.spinner.show();
  }

}
