import { Component, OnInit } from '@angular/core';
import {EdushareService} from '../edushare.service';

import { Student } from '../student';

@Component({
  selector: 'app-studentcontent-page',
  templateUrl: './studentcontent-page.component.html',
  styleUrls: ['./studentcontent-page.component.css']
})
export class StudentcontentPageComponent implements OnInit {
  studentInfo:Student;
  constructor(private _edushareService:EdushareService) { }

  ngOnInit(): void {
    this._edushareService.getStudent(1).subscribe(response => this.studentInfo = response);
  }

}
