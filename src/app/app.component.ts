import { Component } from '@angular/core'
import { GrowthService } from './growth.service'
import { Chart } from 'chart.js'
import { CompareComponent } from './compare/compare.component';
import { PatientService } from './patient.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data
  chart = []

  constructor(private _growth: GrowthService, private _patient: PatientService) {}

  ngOnInit() {
    this._growth.growthRates()
    .subscribe(this.populateChart)
    this._patient.patientData
    .subscribe(this.populateChart)
  }

  populateChart(data) {

      this.data = data
      console.log(this.data.females)
    
      // let newPatient = this.data.females ? this.data.females[0] : this.data
      // console.log(newPatient)
      
      let newPatient = this.data
      console.log(newPatient[0])

      let birth1 = parseInt(newPatient[0])
      let month1 = parseInt(newPatient[1])
      let month2 = parseInt(newPatient[2])
      let month4 = parseInt(newPatient[3])
      let month6 = parseInt(newPatient[4])
      let month9 = parseInt(newPatient[5])
      let month12 = parseInt(newPatient[6])
      let month15 = parseInt(newPatient[7])
      let month18 = parseInt(newPatient[8])
      let month24 = parseInt(newPatient[9])
      
      let standardBirth = 3.53
      let standardMonth1 = 4
      let standardMonth2 = 5.35
      let standardMonth4 = 6.35
      let standardMonth6 = 7.93
      let standardMonth9 = 8.93
      let standardMonth12 = 9.7
      let standardMonth15 = 10.43
      let standardMonth18 = 11.11
      let standardMonth24 = 12.47

      let standardBirthb = 2.94
      let standardMonth1b = 3.5
      let standardMonth2b = 5
      let standardMonth4b = 5.8
      let standardMonth6b = 6.71
      let standardMonth9b = 7.57
      let standardMonth12b = 8.25
      let standardMonth15b = 8.84
      let standardMonth18b = 9.43
      let standardMonth24b = 10.56

      
      this.chart = new Chart('canvas', {
        
        type: 'line',
        data: {
          labels: ['0', '1', '2', '4', '6', '9', '12', '15', '18', '24'],
          datasets: [
            {
              data: [
                birth1,
                month1,
                month2,
                month4,
                month6,
                month9,
                month12,
                month15,
                month18,
                month24
              ],
              label: 'Subject X',
              borderColor: 'red',
              fill: false
            },{
              data: [
                standardBirth,
                standardMonth1,
                standardMonth2,
                standardMonth4,
                standardMonth6,
                standardMonth9,
                standardMonth12,
                standardMonth15,
                standardMonth18,
                standardMonth24
                ],
                label: 'Standard (75th percentile)',
                borderColor: '#3cba9f',
                fill: true
            },{
              data: [
                standardBirthb,
                standardMonth1b,
                standardMonth2b,
                standardMonth4b,
                standardMonth6b,
                standardMonth9b,
                standardMonth12b,
                standardMonth15b,
                standardMonth18b,
                standardMonth24b
                ],
                label: 'Standard (25th percentile)',
                borderColor: 'lightgreen',
                fill: true
            }
          ]
        },
        options: {
          responsive: true,
          title: {
            display: true,
            text: 'Chart by Weight'
          },
          legend: {
            display: true
          },
          scales: {
            xAxes: [{
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Age in Months'
                }
              }],
            yAxes: [{ 
                display: true,
                scaleLabel: {
                  display: true,
                  labelString: 'Kilograms'
                }
            }]
          }
        }
      })
    }
  }

