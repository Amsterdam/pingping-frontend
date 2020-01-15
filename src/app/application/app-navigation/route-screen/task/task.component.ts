import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../../services/app.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-task',
	templateUrl: './task.component.html',
	styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
	task: any = {
		id: null,
		city_points_value: null,
		description: null,
		name: null,
		media: null,
		steps: null
	};
	showPopUp: boolean = false;
	disableAction: boolean = false;
	currentTaskid: any;
	private subscriptions: Subscription[] = [];

	constructor(private appService: AppService,
		private route: ActivatedRoute,
		private sanitizer: DomSanitizer) {

	}

	ngOnInit() {
		this.subscriptions.push(this.appService.getTask(this.route.snapshot.paramMap.get('task')).subscribe((response: any) => {
			this.task = response;
			this.task.media = this.sanitizer.bypassSecurityTrustResourceUrl(response.media);

			this.subscriptions.push(this.route.queryParams.subscribe(params => {
				this.currentTaskid = params.currentTask;
			}))
		}));
	}

	closePopup() {
		this.showPopUp = false;
	}

	completeTask() {
		this.appService.completeTask(this.task.id).subscribe(response => {
			this.showPopUp = true;
			this.disableAction = true;
		});
	}

	ngOnDestroy() {
		this.subscriptions.forEach(subscription => subscription.unsubscribe());
	}


}
