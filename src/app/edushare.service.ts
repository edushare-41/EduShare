import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { map } from 'rxjs/operators';

//import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class EdushareService {
  private _studentUrl = '../assets/students.json';


  constructor(private _http:Http) { }

  getStudent(id:number){
    return this._http.get(this._studentUrl).pipe(map((response) => response.json()));
  }
}
