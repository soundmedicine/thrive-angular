import { Component, OnInit } from '@angular/core';
import { GrowthService } from './growth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data

  constructor(private _growth: GrowthService) {  }

  ngOnInit(){this._growth.growthRates().subscribe(data => {
    this.data=data
  })
  setTimeout(() => console.log(this.data), 5000)
  }
}
