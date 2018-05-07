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

  constructor(private _growth: GrowthService) { }

  ngOnInit(){this._growth.growthRates().subscribe(data => {
    this.data=data
  })
    setTimeout(() => console.log(this.data.females), 1000)

    let birthweight = this.data.females.map(female => female.birth)
    let month1 = this.data.females.map(female => female.month1)
    // let month2 = this.data.females.map(female => female.month2)
    // let month4 = this.data.females.map(female => female.month4)
    // let month6 = this.data.females.map(female => female.month6)
    // let month9 = this.data.females.map(female => female.month9)
    // let month12 = this.data.females.map(female => female.month12)
    // let month15 = this.data.females.map(female => female.month15)
    // let month18= this.data.females.map(female => female.month18)
    // let month24= this.data.females.map(female => female.month24)

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: 'Weight',
        datasets: [
          { 
            data: birthweight,
            borderColor: "#3cba9f",
            fill: false
          },
          { 
            data: month1,
            borderColor: "#ffcc00",
            fill: false
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    })
  }
}
