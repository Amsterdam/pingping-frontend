import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppService } from '../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-data-popup',
  templateUrl: './delete-data-popup.component.html',
  styleUrls: ['./delete-data-popup.component.scss']
})
export class DeleteDataPopupComponent implements OnInit {
  @Output() showPopup: EventEmitter<boolean> = new EventEmitter();

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() { }

  deleteUserData() {
    this.appService.deleteUserData().subscribe(response => {
      this.router.navigate(['/delete-confirmation']);
    });
  }

  closePopup() {
    this.showPopup.emit(false);
  }
}
