import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RouteQuestionnaireService {
  headers = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) {
	if (localStorage.getItem('tempID')) {
		this.headers.headers = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'temp-id': JSON.parse(localStorage.getItem('tempID'))
		});
	  } else {
		localStorage.setItem('tempID', JSON.stringify(this.createTempID()));
		let tempID = localStorage.getItem('tempID');
  
		this.headers.headers = new HttpHeaders({
		  'Content-Type': 'application/json',
		  'temp-id': tempID
		});
	  }
  }

  createTempID() {
    var dt = new Date().getTime();

    var tempID = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (dt + Math.random()*16)%16 | 0;
      dt = Math.floor(dt/16);

      return (c=='x' ? r :(r&0x3|0x8)).toString(16);
    });

    return tempID;
  }

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

  prevQuestion(data: any, id: number) { 
	data = JSON.stringify(data);
	return this.httpClient.post(`${ environment.apiUrl }/question/${id}/prev/`,  data, this.headers);
  }
}
