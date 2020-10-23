import { Injectable } from '@angular/core';
import { Http , Response , Headers} from '@angular/http';
import { map } from 'rxjs/operators';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Observable , throwError} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

//import {Student} from './student';

@Injectable({
  providedIn: 'root'
})
export class EdushareService {
  private _studentUrl = '../assets/students.json';
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
 }

  constructor(private _http:Http, private httpClient:HttpClient ) { }

  getStudent(id:number){
    return this._http.get(this._studentUrl).pipe(map((response) => response.json()));
  }

  postFile(fileToUpload: File): Observable<boolean> {

    const yourHeadersConfig= new HttpHeaders()
    .set('content-type', 'application/*')
    .set('Access-Control-Allow-Origin', '*');

    const endpoint = '../assets/Uploads';
    const formData: FormData = new FormData();

    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.httpClient
      .post(endpoint, formData, { headers: yourHeadersConfig })
      .map(() => { return true; })
      .catch((e) => this.handleError(e));
  }


}
