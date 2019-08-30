import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-reward-popup',
  templateUrl: './reward-popup.component.html',
  styleUrls: ['./reward-popup.component.scss']
})
export class RewardPopupComponent implements OnInit {
  @Input() reward: any;
  @Output() showPopup: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  claimReward() {

  }

  rewardClaimed() {

  }

  closePopup() {
    this.showPopup.emit(false);
  }
}
