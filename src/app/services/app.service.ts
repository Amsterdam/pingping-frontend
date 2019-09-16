import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable, Observer } from 'rxjs';

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

  getReward(rewardID: number) {
    return this.httpClient.get(`${ environment.apiUrl }/reward/${ rewardID }`, this.headers);
  }

  getRewards() {
    return this.httpClient.get(`${ environment.apiUrl }/reward/`, this.headers);
  }

  requestDefaultRoute() {
    return this.httpClient.post(`${ environment.apiUrl }/question/default/`, '', this.headersWithoutUser);
  }

  completeTask(taskID: number) {
    return this.httpClient.post(`${ environment.apiUrl }/task/${ taskID }/complete/`, '', this.headers);
  }

  getUser() {
    return this.httpClient.get(`${ environment.apiUrl }/user/me/`, this.headers);
  }

  claimReward(rewardID: number) {
    return this.httpClient.post(`${ environment.apiUrl }/reward/${ rewardID }/claim/`, '', this.headers);
  }

  getGoals() {
    return this.httpClient.get(`${ environment.apiUrl }/goal/`, this.headers);
  }

  createGoal(goal: any) {
    goal = JSON.stringify(goal);

    return this.httpClient.post(`${ environment.apiUrl }/goal/`, goal, this.headers);
  }

  getAchievements() {
    return this.httpClient.get(`${ environment.apiUrl }/achievement/`, this.headers);
  }

  deleteUserData() {
    return new Observable((observer: Observer<any>) => {
      this.httpClient.get(`${ environment.apiUrl }/user/me/`, this.headers).subscribe((response: any) => {
        this.httpClient.delete(`${ environment.apiUrl }/user/${ response.id }/`, this.headers).subscribe((response: any) => {
          localStorage.removeItem('ppUserID');

          observer.next(response);
          observer.complete();
        });
      });
    });
  }

  importUserData(ppUserID: string) {
    return this.httpClient.get(`${ environment.apiUrl }/user/?user_key=${ ppUserID }`, this.headersWithoutUser);
  }
}
