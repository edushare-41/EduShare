import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { DowloadNotesComponent } from './dowload-notes/dowload-notes.component';
import { TeacherContentPageComponent } from './teacher-content-page/teacher-content-page.component';
import { UploadPageComponent } from './upload-page/upload-page.component';
import { TeacherWelcomePageComponent } from './teacher-welcome-page/teacher-welcome-page.component';

@NgModule({
  declarations: [
    AppComponent,
    DowloadNotesComponent,
    TeacherContentPageComponent,
    UploadPageComponent,
    TeacherWelcomePageComponent
  ],
=======
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [AppComponent],
>>>>>>> 09a55391c62464337cd06cfd7fc24c3ce75f871f
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}