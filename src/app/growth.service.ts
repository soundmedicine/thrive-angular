import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GrowthService {
  data;

  constructor(private _http: HttpClient) {}

  growthRates() {
    return this._http.get('http://localhost:3000/females')
  }
}
