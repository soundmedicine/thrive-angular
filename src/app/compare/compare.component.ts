import { Component, OnInit, AfterViewInit } from '@angular/core'
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.css']
})

export class CompareComponent implements OnInit {
  
  newBirth
  newMonth1
  newMonth2
  newMonth4
  newMonth6
  newMonth9
  newMonth12
  newMonth15
  newMonth18
  newMonth24
  
  constructor(private _patient: PatientService) { }

  ngOnInit() {
    console.log('HOLA')
  }

  onPopulateChart() {
    let newPatientData = []
    newPatientData.push(this.newBirth, this.newMonth1, this.newMonth2, this.newMonth4, this.newMonth6, this.newMonth9, this.newMonth12, this.newMonth15, this.newMonth18, this.newMonth24)
    this._patient.sendNewData(newPatientData)
  }
}
