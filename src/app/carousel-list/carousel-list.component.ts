import { Component, OnInit } from '@angular/core';
// import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';
import {CarouselService} from "./carousel.service";
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css']
})
export class CarouselListComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: 'http://localhost:3001/upload'});

  constructor(
      private carouselService: CarouselService
  ) { }

  ngOnInit() {
  }

  /*public fileuploaderFileChange(files: FileList){
    this.carouselService.addImage(files).subscribe(
        (data) => {
          console.log('data: ', data);
        }
    );
  }


  public selectedFiles;

  public filesSelect(selectedFiles: Ng4FilesSelected): void {
    console.log('filesSelect: ', selectedFiles);
    if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
      this.selectedFiles = selectedFiles.status;
      this.carouselService.addImage(this.selectedFiles).subscribe(
          (data) => {
            console.log('data: ', data);
          }
      );
      // console.log(this.selectedFiles);
      // return;

      // Hnadle error statuses here
    }

    this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
    console.log(this.selectedFiles);
  }
  public uploadFile() {
    this.carouselService.addImage(this.selectedFiles).subscribe(
        (data) => {
          console.log('data: ', data);
        }
    );
  }*/


}
