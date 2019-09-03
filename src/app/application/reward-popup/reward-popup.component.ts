import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-reward-popup',
  templateUrl: './reward-popup.component.html',
  styleUrls: ['./reward-popup.component.scss']
})
export class RewardPopupComponent implements OnInit {
  @Input() reward: any;
  @Output() showPopup: EventEmitter<boolean> = new EventEmitter();
  user: any = {
    city_pings: null,
    user_key: null
  };
  hideActions: boolean = false;
  showQR: boolean = false;
  canClaim: boolean = false;
  showClaimedInfo: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.hideActions = true;

    this.appService.getUser().subscribe((response: any) => {
      this.user = response;
      this.hideActions = false;

      if ((this.user.city_pings >= this.reward.cost) && (this.reward.left > 0)) {
        this.canClaim = true;
      }

      if (!this.reward.claimed.validated) {
        this.showQR = true;
        this.showClaimedInfo = false;
        this.hideActions = true;
      }
    });
  }

  claimReward() {
    this.appService.claimReward(this.reward.id).subscribe((response: any) => {
      this.reward = response;
      this.hideActions = true;
      this.showQR = true;
    });
  }

  cantClaim() {
    this.hideActions = true;
    this.showQR = false;
    this.showClaimedInfo = true;
  }

  closePopup() {
    this.showPopup.emit(false);
  }
}
