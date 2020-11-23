import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Specialization} from '../common/specialization';
import {Properties} from '../common/Properties';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {

  properties: Properties = new Properties();
  baseUrl = this.properties.baseUrl;

  constructor(
    private http: HttpClient) {
  }


  getSpecializations() {
    console.log(`${this.baseUrl}/specializations`);
    return this.http.get<SpecializationListResponse>(`${this.baseUrl}/specializations`);
  }

}

interface SpecializationListResponse {
  specializations: Specialization[];
}
