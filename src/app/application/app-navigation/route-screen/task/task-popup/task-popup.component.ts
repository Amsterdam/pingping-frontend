import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-popup',
  templateUrl: './task-popup.component.html',
  styleUrls: ['./task-popup.component.scss']
})
export class TaskPopupComponent implements OnInit {
  @Input() task: any;
  @Output() showPopup: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit() { }

  closePopup() {
    this.showPopup.emit(false);
  }

  goToRewards() {
    this.router.navigate(['/rewards']);
  }

  goToRoute() {
    this.router.navigate(['/route-screen']);
  }
}
