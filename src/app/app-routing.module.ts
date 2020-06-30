import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';



const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'search/:query', component: SearchPageComponent },
  { path: 'view/:id', component: ViewComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: 'add', component: EditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
