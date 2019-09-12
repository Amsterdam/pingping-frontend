import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.scss']
})
export class ExportComponent implements OnInit {
  ppUserID: string = localStorage.getItem('ppUserID');

  constructor() { }

  ngOnInit() { }

  copyToClipboard() {
    let input: any = document.querySelector('#pp-user-id');
    let button: HTMLElement = document.querySelector('#copy-to-clipboard-button');

    input.select();
    document.execCommand('copy');
    input.setSelectionRange(0, 0);

    button.classList.add('button-gray');
    button.innerHTML = 'Gekopieerd';
  }
}
