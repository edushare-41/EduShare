import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuizPageComponent } from './quiz-page/quiz-page.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { WelcomestudentPageComponent } from './welcomestudent-page/welcomestudent-page.component';
import { StudentcontentPageComponent } from './studentcontent-page/studentcontent-page.component';
import {UploadnotesComponent} from './uploadnotes/uploadnotes.component';

const appRoutes:Routes =[
  {
    path:"quiz-page",
    component:QuizPageComponent
  },
  {
    path:"search-page",
    component:SearchPageComponent
  },
  {
    path:"studentcontent-page",
    component:StudentcontentPageComponent
  },
  {
    path:"welcomestudent-page",
    component:WelcomestudentPageComponent
  },
  {
    path:"uploadnotes",
    component:UploadnotesComponent
  },

  {
    "path": "",
    "redirectTo":"welcomestudent-page",
    "pathMatch": "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
