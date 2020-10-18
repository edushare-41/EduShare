import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import {EdushareService} from './edushare.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WelcomestudentPageComponent } from './welcomestudent-page/welcomestudent-page.component';
import { StudentcontentPageComponent } from './studentcontent-page/studentcontent-page.component';





@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    SearchPageComponent,
    WelcomestudentPageComponent,
    StudentcontentPageComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule

  ],
  providers: [ EdushareService],
  bootstrap: [AppComponent]

})
export class AppModule { }
