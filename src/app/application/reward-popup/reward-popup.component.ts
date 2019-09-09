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
  @Output() userData: EventEmitter<any> = new EventEmitter();
  user: any = {
    city_pings: null,
    user_key: null
  };
  claimedData: any;
  hideActions: boolean = false;
  showQR: boolean = false;
  showQRTemporary: boolean = false;
  canClaim: boolean = false;
  showClaimedInfo: boolean = false;
  showValidatedInfo: boolean = false;
  claimedPressed: boolean = false;

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

      if (this.reward.claimed.validated) {
        this.showQR = false;
        this.hideActions = true;
        this.showClaimedInfo = false;
        this.showValidatedInfo = true;
      }
    });
  }

  claimReward() {
    this.claimedPressed = true;

    this.appService.claimReward(this.reward.id).subscribe((response: any) => {
      this.claimedData = response;
      this.hideActions = true;
      this.showQR = false;
      this.showQRTemporary = true;

      this.appService.getUser().subscribe((response: any) => {
        this.userData.emit(response);
      });
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
