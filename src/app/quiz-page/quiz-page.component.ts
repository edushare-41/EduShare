import { Component, OnInit } from '@angular/core';
import {EdushareService} from '../edushare.service';

import { Student } from '../student';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.css']
})
export class QuizPageComponent implements OnInit {

  studentInfo:Student;

  constructor(private _edushareService:EdushareService) { }

  ngOnInit(): void {
    this._edushareService.getStudent(1).subscribe(response => this.studentInfo = response);
  }

}
