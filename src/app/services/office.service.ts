import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Office} from '../common/office';
import {Properties} from '../common/Properties';
import {OfficeDetails} from '../common/OfficeDetails';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  baseUrl = new Properties().baseUrl;

  constructor(private http: HttpClient) {
  }

  getOffice(doctorName: string, city: string, specializationId: number): Observable<OfficeResponse> {
    let par = new HttpParams();
    if (doctorName !== '' && doctorName !== undefined) {
      par = par.append('name', doctorName);
    }
    if (city !== '' && city !== undefined) {
      par = par.append('city', city);
    }
    if (specializationId !== undefined) {
      par = par.append('specializationId', specializationId.toString());
    }

    const url = `${this.baseUrl}/offices`;
    return this.http.get<OfficeResponse>(url, {params: par});
  }

  getOfficeDetails(officeId: number): Observable<OfficeDetails> {
    return this.http.get<OfficeDetails>(`${this.baseUrl}/offices/${officeId}`);
  }


  getAvailableHours(officeId: number, date: string): Observable<Hours> {
    const url = `${this.baseUrl}/offices/${officeId}/available-hours?date=${date}`;
    console.log(url);
    return this.http.get<Hours>(url);
  }

}

interface OfficeResponse {
  content: Office[];
}

export interface Hours {
  hours: string[];
}


