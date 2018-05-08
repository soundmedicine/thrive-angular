import { Component, OnInit } from '@angular/core'
import { GrowthService } from './growth.service'
import { Chart } from 'chart.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data
  chart = []

  constructor(private _growth: GrowthService) {}

  ngOnInit() {
    this._growth.growthRates()
    .subscribe(data => {
      this.data = data
      console.log(this.data.females)
    
      let female1 = this.data.females[0]

      let birth1 = female1.birth
      let month1 = female1.month1
      let month2 = female1.month2
      let month4 = female1.month4
      let month6 = female1.month6
      let month9 = female1.month9
      let month12 = female1.month12
      let month15 = female1.month15
      let month18 = female1.month18
      let month24 = female1.month24
      // let birthweight = this.data.females.map(female => female.birth)
      // let month1 = this.data.females.map(female => female.month1)
      // let month2 = this.data.females.map(female => female.month2)
      // let month4 = this.data.females.map(female => female.month4)
      // let month6 = this.data.females.map(female => female.month6)
      // let month9 = this.data.females.map(female => female.month9)
      // let month12 = this.data.females.map(female => female.month12)
      // let month15 = this.data.females.map(female => female.month15)
      // let month18= this.data.females.map(female => female.month18)
      // let month24= this.data.females.map(female => female.month24)
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


      this.chart = new Chart('canvas', {
        
        type: 'line',
        data: {
          labels: ['0', '1', '2', '4', '6', '9', '12', '15', '18', '24'],
          datasets: [
            // {
            //   label: 'Female',
            //   backgroundColor: 'red',
            //   borderColor: 'red',
            //   data: [
            //     birthweight,
            //     month1,
            //     month2
            //   ],
            //   fill: false,
            // }
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
              borderColor: '#3cba9f',
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
                borderColor: 'orange',
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
            display: false
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
    })
  }
}
