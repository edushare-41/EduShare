import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
