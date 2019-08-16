import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  constructor(private httpClient: HttpClient) { }

  sendQuestionsForm(data) {
    data = JSON.stringify(data);

    const headers = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    this.httpClient.post(`${ environment.apiUrl }/route/calculate/`, data, headers).subscribe(response => {
      console.log('Response: ', response);
    });
  }
}
