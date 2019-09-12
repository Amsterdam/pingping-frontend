import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.scss']
})
export class DeleteDataComponent implements OnInit {
  showPopUp: boolean = false;

  constructor() { }

  ngOnInit() { }

  confirmDeletePopup() {
    this.showPopUp = true;
  }

  closePopup() {
    this.showPopUp = false;
  }
}
