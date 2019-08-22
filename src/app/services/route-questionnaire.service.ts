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

  getFirstQuestion() {
    return this.httpClient.get(`${ environment.apiUrl }/question/first`, this.headers);
  }

  sendQuestion(data: any) {
    data = JSON.stringify(data);
    let responseQuestion;

    this.httpClient.post(`${ environment.apiUrl }/`, data, this.headers).subscribe(response => {
      console.log('Response: ', response);

      responseQuestion = response;
    });

    return responseQuestion;
  }
}
