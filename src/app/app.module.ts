import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DowloadNotesComponent } from './dowload-notes/dowload-notes.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';

@NgModule({
  declarations: [
    AppComponent,
    DowloadNotesComponent,
    UploadNotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
