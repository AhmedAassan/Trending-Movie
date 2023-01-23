import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ActordetalisComponent } from './actordetalis/actordetalis.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MoviedetalisComponent } from './moviedetalis/moviedetalis.component';
import { MoviesComponent } from './movies/movies.component';
import { NetworksComponent } from './networks/networks.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PeopleComponent } from './people/people.component';
import { RegisterComponent } from './register/register.component';
import { TvComponent } from './tv/tv.component';
import { TvdetalisComponent } from './tvdetalis/tvdetalis.component';

const routes: Routes = [
{path:'' , redirectTo:'home', pathMatch:'full'},
{path:'home' ,canActivate:[AuthGuard], component:HomeComponent},
{path:'about' ,canActivate:[AuthGuard], component:AboutComponent},
{path:'people' ,canActivate:[AuthGuard], component:PeopleComponent},
{path:'movies' ,canActivate:[AuthGuard], component:MoviesComponent},
{path:'tv' ,canActivate:[AuthGuard], component:TvComponent},
{path:'networks' ,canActivate:[AuthGuard], component:NetworksComponent},
{path:'moviedetalis/:id' ,canActivate:[AuthGuard], component:MoviedetalisComponent},
{path:'tvdetalis/:id' ,canActivate:[AuthGuard], component:TvdetalisComponent},
{path:'actordetalis/:id' ,canActivate:[AuthGuard], component:ActordetalisComponent},
{path:'login' , component:LoginComponent},
{path:'register' , component:RegisterComponent},
{path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
