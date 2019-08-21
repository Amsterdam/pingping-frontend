import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class RouteQuestionnaireService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  sendQuestionsForm(data) {
    data = JSON.stringify(data);

    this.httpClient.post(`${ environment.apiUrl }/route/calculate/`, data, this.headers).subscribe(response => {
      console.log('Response: ', response);
    });
  }
}
