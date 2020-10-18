import { Component, OnInit } from '@angular/core';
import {EdushareService} from '../edushare.service';

import { Student } from '../student';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  studentInfo:Student;
  constructor(private _edushareService:EdushareService) { }

  ngOnInit(): void {
    this._edushareService.getStudent(1).subscribe(response => this.studentInfo = response);
  }

}
