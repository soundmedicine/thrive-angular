import { Component, OnInit } from '@angular/core'
import { GrowthService } from './growth.service'
import { Chart } from 'chart.js';

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
    // setTimeout(() => console.log(this.data.females), 1000)

      let birthweight = this.data.females.map(female => female.birth)
      let month1 = this.data.females.map(female => female.month1)
      let month2 = this.data.females.map(female => female.month2)
      let month4 = this.data.females.map(female => female.month4)
      let month6 = this.data.females.map(female => female.month6)
      let month9 = this.data.females.map(female => female.month9)
      let month12 = this.data.females.map(female => female.month12)
      let month15 = this.data.females.map(female => female.month15)
      let month18= this.data.females.map(female => female.month18)
      let month24= this.data.females.map(female => female.month24)

      this.chart = new Chart('canvas', {
        
        type: 'line',
        data: {
          labels: ['Birth', '1 mo', '2 mos', '4 mos', '6 mos', '9 mos', '12 mos', '15 mos', '18 mos', '24 mos'],
          datasets: [
            {
              data: birthweight,
              borderColor: '#3cba9f',
              fill: false
            },
            {
              data: month1,
              borderColor: '#ffcc00',
              fill: false
            },
            {
              data: month2,
              borderColor: 'red',
              fill: false
            },
            {
              data: month4,
              borderColor: 'green',
              fill: false
            },
            {
              data: month6,
              borderColor: 'yellow',
              fill: false
            },
            {
              data: month9,
              borderColor: 'blue',
              fill: false
            },
            {
              data: month12,
              borderColor: 'black',
              fill: false
            },
            {
              data: month15,
              borderColor: 'orange',
              fill: false
            },
            {
              data: month18,
              borderColor: 'pink',
              fill: false
            },
            {
              data: month24,
              borderColor: 'purple',
              fill: false
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                display: true
              }
            ],
            yAxes: [
              { 
                display: true
              }
            ]
          }
        }
      })
    })
  }
}
