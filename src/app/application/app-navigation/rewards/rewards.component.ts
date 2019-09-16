import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
  rewards: any = [{
    id: null,
    title: null,
    cost: null,
    description: null,
    info: null,
    succes_m: null,
    claimed: null,
    picture: null
  }];
  reward: any = null;
  showPopUp: boolean = false;
  showRewards: boolean = false;
  user: any = {
    city_pings: null,
    user_key: null
  };

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRewards().subscribe((response: any) => {
      this.rewards = response;
      this.showRewards = true;
    });

    this.appService.getUser().subscribe((response: any) => {
      this.user = response;
    });
  }

  openRewardPopup(reward: any) {
    this.reward = null;
    this.reward = reward;
    this.showPopUp = true;
  }

  updateData() {
    this.appService.getRewards().subscribe((response: any) => {
      this.rewards = response;
    });

    this.appService.getUser().subscribe((response: any) => {
      this.user = response;
    });
  }

  closePopup() {
    this.showPopUp = false;
  }
}
