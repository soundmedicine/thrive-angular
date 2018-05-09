import { Injectable } from '@angular/core'
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patientData = new Subject()

  constructor() { }

  sendNewData(data) {
    this.patientData.next(data)
  }
}
