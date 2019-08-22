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
    return this.httpClient.get(`${ environment.apiUrl }/question/first/`, this.headers);
  }

  getQuestion(currentQuestion: any) {
    return this.httpClient.get(`${ environment.apiUrl }/question/${ currentQuestion }/`, this.headers);
  }

  sendQuestion(data: any, currentQuestion: number) {
    data = JSON.stringify(data);

    return this.httpClient.post(`${ environment.apiUrl }/question/${ currentQuestion }/next/`, data, this.headers);
  }
}
