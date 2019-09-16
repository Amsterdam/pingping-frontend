import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {
  open: boolean = false;

  constructor() { }

  ngOnInit() { }

  openDropdown() {
    if (!this.open) {
      this.open = true;
    } else {
      this.open = false;
    }
  }
}
