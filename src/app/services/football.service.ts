import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FootballService {
  constructor(private httpClient:HttpClient) { }
  get(): Observable<any> {     
    const apiUrl = 'https://api.collectapi.com/sport/league?data.league=super-lig'
  
    return this.httpClient.get(apiUrl,{headers:{authorization:'apikey 55UHdEASu6BIPWwvqeH3fg:6XK8AlFp4O91YKBEL2cUgp'}});
  }
}
