import {Injectable} from '@angular/core';
import {Properties} from '../common/Properties';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  baseUrl = new Properties().baseUrl;

  constructor(private http: HttpClient) {
  }

  getCities(): Observable<CityResponse> {
    return this.http.get<CityResponse>(`${this.baseUrl}/offices/cities`);
  }
}

interface CityResponse {
  cities: string[];
}
