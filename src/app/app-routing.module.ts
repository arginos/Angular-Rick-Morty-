import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './home/home.component'; // Add this
import { ListComponent } from './list/list.component';
import { LocationComponent } from './location/location.component';
import { EpisodeComponent } from './episode/episode.component';

const routes: Routes = [
  { path: '', component: HomeComponent },              // Add this
  { path: 'list', component: ListComponent },
  { path: 'location', component: LocationComponent },
  { path: 'episode', component: EpisodeComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
