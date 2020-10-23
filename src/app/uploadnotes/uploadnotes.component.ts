import { Component, OnInit } from '@angular/core';
import {EdushareService} from '../edushare.service';
//import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-uploadnotes',
  templateUrl: './uploadnotes.component.html',
  styleUrls: ['./uploadnotes.component.css']
})
export class UploadnotesComponent implements OnInit {
  fileToUpload:File;

  constructor(private _edushareService:EdushareService) { }

  uploadFileToActivity() {
    this._edushareService.postFile(this.fileToUpload).subscribe(data => {
      console.log("success")
      // do something, if upload success
      }, error => {
        console.log(error);
      });
  }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item[0];
  }

//uploader: FileUploader = new FileUploader({ url: "./assets/Uploads", removeAfterUpload: false, autoUpload: true });

}
