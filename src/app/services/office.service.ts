import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Office} from '../common/office';
import {Properties} from '../common/Properties';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {
  baseUrl = new Properties().baseUrl;

  constructor(private http: HttpClient) {
  }

  getOffice(doctorName: string, city: string, specializationId: number): Observable<OfficeResponse> {
    return this.http.get<OfficeResponse>(`${this.baseUrl}/offices?name=${doctorName}&city=${city}&specializationId=${specializationId}`);
  }

}

interface OfficeResponse {
  content: Office[];
}
