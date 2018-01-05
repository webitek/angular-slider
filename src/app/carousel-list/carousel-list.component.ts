import { Component, OnInit } from '@angular/core';
import { Ng4FilesStatus, Ng4FilesSelected } from 'angular4-files-upload';

@Component({
  selector: 'app-carousel-list',
  templateUrl: './carousel-list.component.html',
  styleUrls: ['./carousel-list.component.css']
})
export class CarouselListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public fileuploaderFileChange(files: FileList){

  }


  public selectedFiles;

  public filesSelect(selectedFiles: Ng4FilesSelected): void {
    console.log(selectedFiles);
    if (selectedFiles.status !== Ng4FilesStatus.STATUS_SUCCESS) {
      this.selectedFiles = selectedFiles.status;
      console.log(this.selectedFiles);
      return;

      // Hnadle error statuses here
    }

    this.selectedFiles = Array.from(selectedFiles.files).map(file => file.name);
    console.log(this.selectedFiles);
  }


}
