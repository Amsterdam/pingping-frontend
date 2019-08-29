import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': localStorage.getItem('ppUserID')
    })
  };
  headersWithoutUser = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private httpClient: HttpClient) { }

  getRoute() {
    return this.httpClient.get(`${ environment.apiUrl }/route/preview/`, this.headers);
  }

  getTask(task: string) {
    return this.httpClient.get(`${ environment.apiUrl }/task/${ task }/`, this.headers);
  }

  getRewards() {
    return this.httpClient.get(`${ environment.apiUrl }/reward/`, this.headers);
  }

  requestDefaultRoute() {
    return this.httpClient.post(`${ environment.apiUrl }/question/default/`, '', {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      })
    });
  }
}
