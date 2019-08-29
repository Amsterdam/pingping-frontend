import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-rewards',
  templateUrl: './rewards.component.html',
  styleUrls: ['./rewards.component.scss']
})
export class RewardsComponent implements OnInit {
  rewards: any = [{
    title: null,
    cost: null,
    description: null,
    info: null,
    succes_m: null,
    claimed: null
  }];

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.appService.getRewards().subscribe(response => {
      this.rewards = response;
    });
  }
}
