import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { DowloadNotesComponent } from './dowload-notes/dowload-notes.component';
import { TeacherContentPageComponent } from './teacher-content-page/teacher-content-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { TeacherWelcomePageComponent } from './teacher-welcome-page/teacher-welcome-page.component';
import { SearchComponent } from './curious-mind/search/search.component';
import { SearchResultsComponent } from './curious-mind/search-results/search-results.component';
import { environment } from 'src/environments/environment';
import { UploadNotesComponent } from './curious-mind/upload-notes/upload-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DowloadNotesComponent,
    TeacherContentPageComponent,
    UploadPageComponent,
    TeacherWelcomePageComponent,
    SearchComponent,
    SearchResultsComponent,
    UploadNotesComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
