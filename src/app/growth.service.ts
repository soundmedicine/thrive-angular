import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GrowthService {

  data

  constructor(private _http: HttpClient) {}

  growthRates() {
    return this._http.get('https://thrive-server.herokuapp.com/females')
  }

  ngOnInit() {
    console.log(this.data)
  }
}
