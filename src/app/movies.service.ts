import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient:HttpClient) { }
  
  grtTrending(mediaType:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=755622184b6e95ac3c3cd2d3c76bd10c`)
  }
  moviedetalis(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${id}?api_key=755622184b6e95ac3c3cd2d3c76bd10c&language=en-US`)
  }
  tvdetalis(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${id}?api_key=755622184b6e95ac3c3cd2d3c76bd10c&language=en-US`)
  }
  actordetalis(id:string):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/${id}?api_key=755622184b6e95ac3c3cd2d3c76bd10c&language=en-US`)
  }
}
