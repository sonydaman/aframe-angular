import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExamplesComponent } from './examples/examples.component';
import { HomeComponent } from './home/home.component';
import { Examples2Component } from './examples2/examples2.component';

const routes: Routes = [
  { path: 'example1', component: ExamplesComponent },
  { path: 'example2', component: Examples2Component },
  { path: 'home', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
