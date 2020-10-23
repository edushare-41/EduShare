import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { FileUploadModule } from 'ng2-file-upload';

import {EdushareService} from './edushare.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WelcomestudentPageComponent } from './welcomestudent-page/welcomestudent-page.component';
import { StudentcontentPageComponent } from './studentcontent-page/studentcontent-page.component';
import { UploadnotesComponent } from './uploadnotes/uploadnotes.component';





@NgModule({
  declarations: [
    AppComponent,
    QuizPageComponent,
    SearchPageComponent,
    WelcomestudentPageComponent,
    StudentcontentPageComponent,
    UploadnotesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule
    //FileUploadModule

  ],
  providers: [ EdushareService],
  bootstrap: [AppComponent]

})
export class AppModule { }
