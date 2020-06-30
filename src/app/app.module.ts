import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CardComponent } from './components/card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SearchComponent } from './header/search/search.component';
import { MatInputModule } from '@angular/material/input';
import { AvatarComponent } from './header/avatar/avatar.component';
import {MatMenuModule} from '@angular/material/menu';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchCardComponent } from './components/search-card/search-card.component';
import { ViewComponent } from './pages/view/view.component';
import { EditComponent } from './pages/edit/edit.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    CardComponent,
    SearchComponent,
    AvatarComponent,
    SearchPageComponent,
    SearchCardComponent,
    ViewComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
