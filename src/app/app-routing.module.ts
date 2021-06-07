import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListNoticiasComponent } from './list-noticias/list-noticias.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,    
  },
  {
    path: "list",
    component: ListNoticiasComponent,
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
