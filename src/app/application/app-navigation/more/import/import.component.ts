import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../../../services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-import',
  templateUrl: './import.component.html',
  styleUrls: ['./import.component.scss']
})
export class ImportComponent implements OnInit {
  @ViewChild('importUserData', {static: false}) importUserData: ElementRef;
  importForm: FormGroup;
  isLoggedIn: boolean = false;

  constructor(private appService: AppService,
              private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('ppUserID')) {
      this.isLoggedIn = true;
    }

    this.importForm = new FormGroup({
      ppUserID: new FormControl('', Validators.required)
    });
  }

  import() {
    const ppUserID = this.importForm.controls.ppUserID.value;

    this.importUserData.nativeElement.disabled = true;
    this.importUserData.nativeElement.classList.add('button-gray');

    this.appService.importUserData(ppUserID).subscribe((response: any) => {
      if (response.length > 0) {
        if (response[0].user_key) {
          localStorage.setItem('ppUserID', ppUserID);

          this.router.navigate(['/import-confirmation']);
        }
      }
    });

    this.importForm.reset('');
  }
}
