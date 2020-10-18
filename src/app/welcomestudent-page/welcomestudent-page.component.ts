import { Component, OnInit } from '@angular/core';
import {EdushareService} from '../edushare.service';

import { Student } from '../student';

@Component({
  selector: 'app-welcomestudent-page',
  templateUrl: './welcomestudent-page.component.html',
  styleUrls: ['./welcomestudent-page.component.css']
})
export class WelcomestudentPageComponent implements OnInit {
  studentInfo:Student;

  constructor(private _edushareService:EdushareService) { }

  ngOnInit(): void {
    this._edushareService.getStudent(1).subscribe(response => this.studentInfo = response);
  }

}
