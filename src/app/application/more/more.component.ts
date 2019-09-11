import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.scss']
})
export class MoreComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() { }

  export() {
    this.router.navigate(['/export']);
  }

  import() {
    this.router.navigate(['/import']);
  }

  deleteUserData() {
    this.router.navigate(['/delete-data']);
  }
}
